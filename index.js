const express = require('express');
const morgan = require('morgan');
const middleware = require('./src/middlewares/middleware');
const router = require('./src/routes/carsRoutes');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Ping succsessfully' });
});

app.use('/api/v1/cars', router);

app.use(middleware.handlerError);

module.exports = app;
