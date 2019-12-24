const bootcampRouter = require('express').Router();
const {getBootcamps,createBootcamp,getBootcamp,deleteBootcamp,updateBootcamp} = require('../controller/bootcamp');

bootcampRouter.route('/').get(getBootcamps).post(createBootcamp);
bootcampRouter.route('/:id').get(getBootcamp).patch(updateBootcamp).delete(deleteBootcamp);

module.exports = bootcampRouter;