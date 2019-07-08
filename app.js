const app = require('express')();
const cors = require('cors');
const bodyparser = require('body-parser');
const apirouter = require('./routes/api');

app.use(cors());
app.use(bodyparser.json());

app.use('/api', apirouter);
app.use('/*', (req, res, next) => {
  next({ status: 404, msg: 'Page not found!' });
});
module.exports = app;
