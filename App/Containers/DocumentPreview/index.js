import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBAppBar from '../../Components/CBAppBar';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import {useTheme} from '../../Providers/ThemeProvider';
import {scale} from '../../Utils/scale';
import APIManager from '../../Network/APIManager';
import UserService from '../../Utils/UserService';
import CBSvg from '../../assets/svgs/CBSvg';
import FileUpload from '../../assets/svgs/FileUpload';
import LinearGradient from 'react-native-linear-gradient';
import RNFetchBlob from 'rn-fetch-blob';
import DialogUtil from '../../Utils/DialogUtil';
import CBLoader from '../../Components/CBLoader';
import {isIOS} from '../../Utils/extension';

function DocumentPreview(props) {
  const group = props.navigation.getParam('group');
  const [attachments, setAttachments] = useState([]);
  const [selAttachments, setSelAttachments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {colors} = useTheme();

  useEffect(() => {
    APIManager.fetchMessages(group.id)
      .then(res => {
        setAttachments(res.filter(m => m.attachment != null));
      })
      .catch(error => {
        console.log(error);
      });
  }, [group.id]);

  const handleDownload = async () => {
    if (Platform.OS === 'ios') {
      setIsLoading(true);
      downloadFile(0);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          setIsLoading(true);
          downloadFile(0);
        } else {
          DialogUtil.showError('Storage Permission Not Granted');
        }
      } catch (err) {
        console.log('++++' + err);
      }
    }
  };

  const downloadFile = fileIndex => {
    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = selAttachments[fileIndex].attachment;
    FILE_URL = FILE_URL.slice(0, FILE_URL.indexOf('?'));
    // Function to get extention of the file url
    let file_ext = UserService.getFileExt(selAttachments[fileIndex]);

    // config: To get response by passing the downloading related options
    // fs: Root directory path to download

    const {config, fs} = RNFetchBlob;
    let RootDir = isIOS() ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
    const filePath =
      RootDir +
      '/file_' +
      Math.floor(date.getTime() + date.getSeconds() / 2) +
      '.' +
      file_ext;
    let options = isIOS()
      ? {
          fileCache: true,
          appendExt: file_ext,
          notification: true,
          path: filePath,
        }
      : {
          fileCache: true,
          appendExt: file_ext,
          addAndroidDownloads: {
            path: filePath,
            description: 'downloading file...',
            notification: true,
            // useDownloadManager works with Android only
            useDownloadManager: true,
          },
        };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        if (fileIndex + 1 === selAttachments.length) {
          setIsLoading(false);
          if (isIOS()) {
            RNFetchBlob.ios.openDocument(res.data);
          }
          DialogUtil.showSuccess('Downloaded successfully!');
        } else {
          downloadFile(fileIndex + 1);
        }
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        DialogUtil.showWarning('Download Failed');
      });
  };

  const renderHeaderRight = () => {
    if (selAttachments.length === 0) {
      return null;
    }
    return (
      <TouchableOpacity onPress={() => handleDownload()}>
        <Text style={styles(colors).download}>Download</Text>
      </TouchableOpacity>
    );
  };

  const onPressItem = item => {
    if (selAttachments.some(s => s.id === item.id)) {
      setSelAttachments(selAttachments.filter(s => s.id !== item.id));
    } else {
      setSelAttachments([...selAttachments, item]);
    }
  };

  return (
    <View style={ApplicationStyles(colors).fullView}>
      <CBAppBar title={'Shared'} renderHeaderRight={renderHeaderRight} />
      <FlatList
        numColumns={3}
        data={attachments}
        style={styles(colors).flatList}
        renderItem={({item}) => {
          let isImage = UserService.isImageFile(item.attachment_name);
          let isSelected = selAttachments.some(s => s.id === item.id);
          return (
            <TouchableOpacity
              onPress={() => onPressItem(item)}
              style={styles(colors).itemContainer}
              activeOpacity={0.9}>
              <LinearGradient
                useAngle={true}
                angle={269.88}
                angleCenter={{x: 0.5, y: 0.5}}
                locations={[0, 1.0]}
                colors={['#6D85D3', '#95A7DE']}
                style={[
                  {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  isSelected && {
                    borderWidth: 2,
                    borderColor: colors.black,
                    borderRadius: scale(8),
                  },
                ]}>
                {isImage ? (
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri: item.attachment.slice(
                        0,
                        item.attachment.indexOf('?'),
                      ),
                    }}
                    resizeMode={'cover'}
                  />
                ) : (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <CBSvg
                      icon={FileUpload}
                      width={scale(19.51)}
                      height={scale(19.5)}
                      color={'white'}
                      extraColor={'white'}
                    />
                    <Text style={[styles(colors).name]}>
                      {item.attachment_name}
                    </Text>
                  </View>
                )}
              </LinearGradient>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={() => <View style={{marginBottom: scale(40)}} />}
      />
      <CBLoader isLoading={isLoading} />
    </View>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(DocumentPreview);
