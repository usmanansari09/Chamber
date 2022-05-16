import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {usePubNub} from 'pubnub-react';
import connect from 'react-redux/lib/connect/connect';
import UserService from '../../Utils/UserService';
import {scale} from '../../Utils/scale';
import {useTheme} from '../../Providers/ThemeProvider';
import CBAvatar from '../../Components/CBAvatar';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import DateTimeUtil from '../../Utils/DateTimeUtil';
import CBSvg from '../../assets/svgs/CBSvg';
import FileUpload from '../../assets/svgs/FileUpload';
import DocumentPicker from 'react-native-document-picker';
import DialogUtil from '../../Utils/DialogUtil';
import CBLoader from '../../Components/CBLoader';
import APIManager from '../../Network/APIManager';
import moment from 'moment';
import * as userActions from '../../Sagas/UserSaga/actions';
import ChatService from '../../Utils/ChatService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../../Constants/Constants';

const ChatEngine = props => {
  let scrollViewRef = useRef();
  const {colors} = useTheme();
  const {user, group} = props;
  console.log(user);

  const channel_id = ChatService.getChannelId(group);

  // Here we obtain our PubNub instance thanks to using the provider
  const pubnub = usePubNub();

  // In next two statements we define the state needed for our chat
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let prevDate = '';

  const onKeyboardDidShow = e => {
    scrollViewRef?.current?.scrollToEnd({animated: true});
  };

  const onKeyboardDidHide = () => {
    scrollViewRef?.current?.scrollToEnd({animated: true});
  };

  useEffect(() => {
    AsyncStorage.setItem(
      Constants.AS_CURRENT_ROOM,
      group.users.map(u => UserService.getUserName(u)).join(', '),
    );
    const keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const keyboardHidenListener = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      AsyncStorage.setItem(Constants.AS_CURRENT_ROOM, '');
      keyboardShowListener && keyboardShowListener.remove();
      keyboardHidenListener && keyboardHidenListener.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    APIManager.fetchMessages(group.id).then(res => {
      console.log(res);
      setMessages(msgs =>
        [
          ...msgs,
          ...res.map(m => ({
            id: m.id,
            author: m.sender,
            content: m.message,
            file: m.attachment
              ? {
                  url: m.attachment.slice(0, m.attachment.indexOf('?')),
                  name: m.attachment_name,
                  mimeType: m.mimetype,
                }
              : null,
            timetoken: Number(moment.utc(`${m.sent_at}`).unix()) * 10000000,
          })),
        ].sort((x, y) => Number(x.timetoken) - Number(y.timetoken)),
      );
      props.actions.fetchGroups();
    });
  }, [group.id, props.actions]);

  // First we need to set our PubNub UUID and subscribe to chat channel.
  // We will use `useEffect` hook for that.
  useEffect(() => {
    // We need to make sure that PubNub is defined
    if (pubnub) {
      // Set the UUID of our user to their chosen emoji
      pubnub.setUUID(user.id);

      // Create a listener that will push new messages to our `messages` variable
      // using the `setMessages` function.
      const listener = {
        message: envelope => {
          console.log('envelope: ', envelope);
          if (envelope.message.content !== '') {
            setMessages(msgs => [
              ...msgs,
              {
                id: envelope.message.id,
                author: envelope.publisher,
                content: envelope.message.content,
                timetoken: envelope.timetoken,
              },
            ]);
            props.actions.fetchGroups();
          }
        },
        file: envelope => {
          console.log('envelope: ', envelope);
          setMessages(msgs => [
            ...msgs,
            {
              id: envelope.file.id,
              author: envelope.publisher,
              message: envelope.message,
              file: envelope.file,
              timetoken: envelope.timetoken,
            },
          ]);
          setTimeout(() => {
            props.actions.fetchGroups();
          }, 3000);
        },
      };

      // Add the listener to pubnub instance and subscribe to `chat` channel.
      pubnub.addListener(listener);
      pubnub.subscribe({channels: [channel_id]});

      // We need to return a function that will handle unsubscription on unmount
      return () => {
        pubnub.removeListener(listener);
        pubnub.unsubscribeAll();
      };
    }
  }, [channel_id, props.actions, pubnub, user]);

  // This function handles sending messages.
  const handleSubmit = () => {
    if (input === '') {
      return;
    }
    // Clear the input field.
    setInput('');

    // Create the message with random `id`.
    const message = {
      content: input,
      id: Math.random().toString(16).substr(2),
    };

    // Publish our message to the channel `chat`
    submitNotification(message);
    APIManager.sendMessage(group.id, {
      message: input,
    })
      .then(res => {})
      .catch(error => {
        console.log(error);
        DialogUtil.showWarning(error);
      });
  };

  const submitNotification = message => {
    const title = group.group_chat
      ? `Chamber: ${UserService.getGroupName(group, user)}`
      : 'Chamber Message';
    const body = `${UserService.getUserName(user)}: ${
      message.content === '' ? 'Shared a file' : message.content
    }`;
    const messagePayload = {
      pn_apns: {
        aps: {
          alert: {
            title,
            body,
          },
        },
      },
      pn_gcm: {
        notification: {
          title,
          body,
          sound: 'default',
        },
      },
      ...message,
    };
    pubnub.publish(
      {
        message: messagePayload,
        channel: channel_id,
      },
      status => {
        // Handle publish status
      },
    );
  };

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        copyTo: 'documentDirectory',
      });
      if (result.length > 0) {
        const res = result[0];
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );

        setIsLoading(true);
        const sendingResult = await pubnub.sendFile({
          channel: channel_id,
          file: {
            uri: res.uri,
            name: res.name,
            mimeType: res.type,
          },
        });
        submitNotification({
          content: '',
          id: Math.random().toString(16).substr(2),
        });

        setIsLoading(false);

        APIManager.sendMessage(group.id, {
          message: 'test',
          mimetype: res.type,
          attachment_name: res.name,
          attachment: {
            uri: res.uri,
            name: res.name,
            type: res.type,
          },
        })
          .then(res => {})
          .catch(error => {
            console.log(error);
            DialogUtil.showWarning(error);
          });

        console.log(sendingResult);
      } else {
        DialogUtil.showWarning('Something went wrong');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles(colors).topContainer}>
        <ScrollView
          ref={scrollViewRef}
          style={{flex: 1}}
          contentContainerStyle={{
            justifyContent: 'flex-end',
            minHeight: '100%',
          }}
          onContentSizeChange={() =>
            scrollViewRef?.current?.scrollToEnd({animated: true})
          }>
          {messages.map((message, index) => {
            let author;
            if (message.author?.id === undefined) {
              let authors = group.users.filter(
                u => u.id.toString() === message.author,
              );
              if (authors.length === 0) {
                return null;
              }
              author = authors[0];
            } else {
              author = message.author;
            }
            const isMine = author.id === user.id;
            let isImage = UserService.isImageFile(message.file?.name);

            let dateNeeded = false;
            const date = DateTimeUtil.getChatDate(message.timetoken);
            if (prevDate !== date) {
              dateNeeded = true;
              prevDate = date;
            }

            return (
              <View>
                {dateNeeded && (
                  <Text
                    style={[
                      styles(colors).messageTime,
                      {fontSize: scale(13), alignSelf: 'center'},
                    ]}>
                    {date}
                  </Text>
                )}
                <View
                  key={message.timetoken}
                  style={[
                    styles(colors).messageContainer,
                    {justifyContent: isMine ? 'flex-end' : 'flex-start'},
                  ]}>
                  {!isMine && <CBAvatar size={scale(36)} uri={author.image} />}
                  <View>
                    {!isMine && group.group_chat && (
                      <Text style={[styles(colors).messageTime]}>
                        {UserService.getUserName(author)}
                      </Text>
                    )}
                    <View
                      style={[
                        isMine
                          ? styles(colors).messageContent2
                          : styles(colors).messageContent1,
                        styles(colors).messageContent,
                      ]}>
                      {message.content != null && (
                        <Text
                          style={[
                            styles(colors).message,
                            isMine
                              ? styles(colors).message2
                              : styles(colors).message1,
                          ]}>
                          {message.content}
                        </Text>
                      )}
                      {message.file != null && (
                        <View style={{flexDirection: 'row'}}>
                          {isImage ? (
                            <Image
                              style={{width: '100%', height: scale(140)}}
                              source={{uri: message.file.url}}
                              resizeMode={'cover'}
                            />
                          ) : (
                            <>
                              <CBSvg
                                icon={FileUpload}
                                width={scale(19.51)}
                                height={scale(19.5)}
                                color={colors.gradient1}
                                extraColor={colors.gradient2}
                              />
                              <Text
                                style={[
                                  styles(colors).message,
                                  isMine
                                    ? styles(colors).message2
                                    : styles(colors).message1,
                                  {marginLeft: scale(6)},
                                ]}>
                                attachment: {message.file?.name}
                              </Text>
                            </>
                          )}
                        </View>
                      )}
                    </View>
                    <Text
                      style={[
                        styles(colors).messageTime,
                        {textAlign: isMine ? 'right' : 'left'},
                      ]}>
                      {DateTimeUtil.getChatTime(message.timetoken)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles(colors).bottomContainer}>
        <View style={styles(colors).textInputContainer}>
          <TextInput
            multiline={true}
            style={[styles(colors).textInput, {maxHeight: scale(280)}]}
            value={input}
            onChangeText={setInput}
            returnKeyType="default"
            enablesReturnKeyAutomatically={true}
            placeholder="Message.."
            placeholderTextColor={colors.inputPlaceholder}
          />
        </View>
        <TouchableOpacity
          style={{marginHorizontal: scale(8)}}
          onPress={() => handlePickDocument()}>
          <CBSvg
            icon={FileUpload}
            width={scale(19.51)}
            height={scale(19.5)}
            color={colors.gradient1}
            extraColor={colors.gradient2}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: scale(2)}}
          onPress={() => handleSubmit()}>
          <Text style={styles(colors).send}>Send</Text>
        </TouchableOpacity>
      </View>
      <CBLoader isLoading={isLoading} />
    </SafeAreaView>
  );
};

const styles = Colors =>
  StyleSheet.create({
    topContainer: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: 16,
    },
    messageContainer: {
      width: '100%',
      flexDirection: 'row',
      marginTop: scale(8),
      alignItems: 'center',
    },
    messageContent1: {
      backgroundColor: Colors.mBack1,
    },
    messageContent2: {
      backgroundColor: Colors.mBack2,
    },
    messageContent: {
      maxWidth: scale(240),
      borderRadius: scale(6),
      paddingHorizontal: scale(12),
      paddingVertical: scale(6),
      marginHorizontal: scale(8),
    },
    message1: {
      color: Colors.mText1,
    },
    message2: {
      color: Colors.mText2,
    },
    message: {
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(12),
    },
    messageTime: {
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(12),
      color: Colors.mTime,
      marginHorizontal: scale(8),
      marginVertical: scale(4),
    },
    bottomContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      padding: scale(8),
    },
    textInputContainer: {
      flex: 1,
      borderRadius: scale(8),
      borderColor: Colors.search,
      borderWidth: 2,
    },
    textInput: {
      ...ApplicationStyles(Colors).MediumFont,
      color: Colors.black,
      padding: scale(8),
    },
    send: {
      ...ApplicationStyles.SemiBoldFont,
      fontSize: scale(14),
      color: Colors.black,
    },
  });

const mapStateToProps = state => ({
  user: state.User.user,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getProfile: () => {
      dispatch(userActions.getProfile());
    },
    fetchGroups: () => {
      dispatch(userActions.fetchGroups());
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatEngine);
