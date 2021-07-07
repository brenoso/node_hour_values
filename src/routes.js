const routes = require('express').Router();

const SensorSumController = require('./controllers/SensorSumController');

routes.get('/sensor/sum', SensorSumController.index);

module.exports = routes;