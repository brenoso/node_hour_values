const { DateTime } = require('luxon');

module.exports.truncByHour = date => {
  const dateHour = DateTime.fromJSDate(date).toFormat('yyyy-LL-dd_HH:00')
  return dateHour;
};

module.exports.formatToDate = format => {
  const date = DateTime.fromFormat(format, 'yyyy-LL-dd_HH:00').toJSDate();
  return date;
};
