const fs = require('fs');

let pathFileJson = `${__dirname}/../data/cars.json`;

let cars = JSON.parse(fs.readFileSync(pathFileJson, 'utf-8'));

const checkId = (req, res, next, val) => {
  const carId = cars.findIndex((car) => {
    return car.id === val;
  });
  const car = cars[carId];

  if (!car) {
    return res.status(404).json({
      status: 'failed',
      message: `Can't find the car with id: ${val}`,
    });
  }

  next();
};

const handlerError = (error, req, res, next) => {
  console.error(error);
  return res.status(500).json({
    error: 'Something wrong!!!',
  });
};

module.exports = { checkId, handlerError };
