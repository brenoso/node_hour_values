const DateUtil = require('../utils/DateUtil');
const TransformUtil = require('../utils/TransformUtil');

module.exports.sumByHour = sensorList => {
  const response = sensorList.reduce((acc, sensor) => {
    let dateHourKey = DateUtil.truncByHour(sensor.ts);

    if (!acc[dateHourKey]) acc[dateHourKey] = { value: 0 };

    acc[dateHourKey].value += sensor.value;

    return acc;
  }, {});

  const sensorSummedByHourList = TransformUtil.objectToArray(response);

  return sensorSummedByHourList;
}