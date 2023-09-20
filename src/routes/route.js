const express = require('express');
const handler = require('../utils/handler');

const router = express.Router();

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
