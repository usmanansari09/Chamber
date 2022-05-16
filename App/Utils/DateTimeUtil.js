import moment from 'moment';

function getLocalTime(date) {
  return moment(date).format('HH:mm');
}

function getLocalDate(date) {
  const format = 'dddd, MMMM Do YYYY';
  const dateStr = moment(date).format(format);
  if (dateStr === moment(new Date()).format(format)) {
    return 'Today';
  }
  if (dateStr === moment(new Date() - 86400000).format(format)) {
    return 'Yesterday';
  }

  return dateStr;
}

function getChatTime(date) {
  const gmtDate = new Date(Number(date) / 10000);
  return getLocalTime(gmtDate);
}

function getChatDate(date) {
  const gmtDate = new Date(Number(date) / 10000);
  return getLocalDate(gmtDate);
}

export default {
  getLocalTime,
  getChatTime,
  getChatDate,
};
