const getUserName = user => {
  return `${user.first_name ?? ''} ${user.last_name ?? ''}`;
};

const getGroupImage = (group, user) => {
  if (group.group_chat) {
    return group.image;
  }

  const oUsers = group.users.filter(u => u.id !== user.id);
  if (oUsers.length === 0) {
    return null;
  }

  return oUsers[0].image;
};

const getGroupName = (group, user) => {
  if (group.group_chat) {
    return group.name;
  }

  const oUsers = group.users.filter(u => u.id !== user.id);
  if (oUsers.length === 0) {
    return '';
  }

  return `${oUsers[0].first_name} ${oUsers[0].last_name}`;
};

const isImageFile = name => {
  const splits = name?.split('.') ?? [];
  return (
    splits.length > 0 &&
    ['jpeg', 'jpg', 'png', 'gif', 'raw'].includes(splits[splits.length - 1])
  );
};

const getFileExt = file => {
  const splits = file.attachment_name?.split('.') ?? [];
  if (splits.length > 0) {
    return splits[splits.length - 1];
  }

  return 'unknown';
};

export default {
  getUserName,
  getGroupImage,
  getGroupName,
  isImageFile,
  getFileExt,
};
