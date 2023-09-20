const express = require('express');
const handler = require('./src/utils/handler');
const router = require('./src/routes/route');

const PORT = process.env.PORT || 7000;
const host = 'localhost';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Ping succsessfully' });
});

app.use('/api/v1/cars', router);

app.use(handler.handleError);

//activate server
app.listen(PORT, () => {
  console.log(`Express nyala di http://${host}:${PORT}`);
});
