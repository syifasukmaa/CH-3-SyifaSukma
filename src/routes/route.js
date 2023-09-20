const express = require('express');
const handler = require('../utils/handler');

const router = express.Router();

//getAllCars
router.get('/', handler.handleListCars);

//getcarDetail
router.get('/:id', handler.handleCarDetail);

//addNewCar
router.post('/', handler.handleAddCar);

//updateCar
router.put('/:id', handler.handlerUpdateCar);

//deleteCar
router.delete('/:id', handler.handlerDeleteCar);

module.exports = router;
