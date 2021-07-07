const SensorService = require('../services/SensorService');
const SumService = require('../services/SumService');

module.exports.index = (req, res) => {

  const sensorList = SensorService.findAll();

  const sensorSummedByHourList = SumService.sumByHour(sensorList);

  return res.send({ status: 0, sensorSummedByHourList });

}