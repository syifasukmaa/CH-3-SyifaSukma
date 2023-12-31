const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let pathFileJson = `${__dirname}/../data/cars.json`;

let cars = JSON.parse(fs.readFileSync(pathFileJson, 'utf-8'));

//get all cars
const handlerGetAllCars = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Success Get All Cars',
      data: { cars },
    });
  } catch (error) {
    next(error);
  }
};

//get car detail
const handlerGetCarDetail = (req, res, next) => {
  const id = req.params.id;

  try {
    const carId = cars.findIndex((car) => {
      return car.id === id;
    });
    const car = cars[carId];

    res.status(200).json({
      status: 'success',
      message: 'Success Get Car Detail',
      data: { car },
    });
  } catch (error) {
    next(error);
  }
};

//add new car
const handlerAddNewCar = (req, res, next) => {
  let idCar = uuidv4();

  try {
    const newCar = Object.assign({ id: idCar }, req.body);
    cars.push(newCar);

    fs.writeFile(pathFileJson, JSON.stringify(cars, null, 2), (err) => {
      res.status(201).json({
        status: 'success',
        message: 'Success Add New Car',
        data: {
          car: newCar,
        },
      });
    });
  } catch (error) {
    next(error);
  }
};

//update car Detail
const handlerUpdateCar = (req, res, next) => {
  const id = req.params.id;
  try {
    const carId = cars.findIndex((car) => {
      return car.id === id;
    });

    cars[carId] = { ...cars[carId], ...req.body };

    fs.writeFile(pathFileJson, JSON.stringify(cars, null, 2), (err) => {
      res.status(201).json({
        status: 'success',
        message: 'Success Updated Car',
        data: {
          car: cars[carId],
        },
      });
    });
  } catch (error) {
    next(error);
  }
};

//delete car detail
const handlerDeleteCar = (req, res, next) => {
  const id = req.params.id;
  try {
    const carId = cars.findIndex((car) => {
      return car.id === id;
    });

    cars.splice(carId, 1);
    fs.writeFile(pathFileJson, JSON.stringify(cars, null, 2), (err) => {
      res.status(200).json({
        status: 'success',
        message: `Success Delete Car`,
        data: null,
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handlerGetAllCars,
  handlerGetCarDetail,
  handlerAddNewCar,
  handlerUpdateCar,
  handlerDeleteCar,
};
