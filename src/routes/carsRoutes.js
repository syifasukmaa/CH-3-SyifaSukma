const express = require('express');
const middleware = require('../middlewares/middleware');
const handler = require('../controllers/handler');

const router = express.Router();

router.param('id', middleware.checkId);

//getAllCars
router.get('/', handler.handlerGetAllCars);

//getcarDetail
router.get('/:id', handler.handlerGetCarDetail);

//addNewCar
router.post('/', handler.handlerAddNewCar);

//updateCar
router.put('/:id', handler.handlerUpdateCar);

//deleteCar
router.delete('/:id', handler.handlerDeleteCar);

module.exports = router;
