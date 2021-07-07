const DateUtil = require('./DateUtil');

module.exports.objectToArray = objectData => {
  const dataList = Object.keys(objectData).map(key => {

    const data = {
      value: objectData[key].value,
      ts: DateUtil.formatToDate(key)
    };

    return data;

  });

  return dataList;
}