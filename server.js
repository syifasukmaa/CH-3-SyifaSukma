const app = require('./index');

const PORT = process.env.PORT || 7000;
const host = 'localhost';

app.listen(PORT, () => {
  console.log(`Express nyala di http://${host}:${PORT}`);
});
