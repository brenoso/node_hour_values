const sensorList = require('../../__tests__/mock/sensorList');

class Sensor {
  constructor() {

  };

  findAll() {
    return sensorList;
  }
}

module.exports = Sensor;