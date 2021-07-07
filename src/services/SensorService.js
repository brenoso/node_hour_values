const Sensor = require('../models/Sensor');

module.exports.findAll = () => {
  const SensorInstance = new Sensor();

  const sensorList = SensorInstance.findAll();

  return sensorList;
};
