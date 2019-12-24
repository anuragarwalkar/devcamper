const allRoutes = require('express').Router();
const bootcampRoutes = require('./bootcamp');

allRoutes.use('/bootcamp',bootcampRoutes);


module.exports = allRoutes;