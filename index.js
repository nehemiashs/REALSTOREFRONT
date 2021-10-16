const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extend:false}));



app.use(require('./routes'))
app.listen('3000',() => {
  console.log('escuchando');
})
