const { DateTime } = require('luxon');

module.exports.truncByHour = date => {
  const dateHour = DateTime.fromJSDate(date).toFormat('yyyy-LL-dd_HH:00');
  if (dateHour === 'Invalid DateTime') {
    return undefined;
  }
  return dateHour;
};

module.exports.formatToDate = format => {
  if (!format) return undefined;

  const date = DateTime.fromFormat(format, 'yyyy-LL-dd_HH:00').toJSDate();
  return date;
};
