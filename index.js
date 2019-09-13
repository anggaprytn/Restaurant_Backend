const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('./routes')(app);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`App running on port ${PORT}`);
});
