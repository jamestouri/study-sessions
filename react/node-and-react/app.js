const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const events = require('./routes/api/events')
const bodyParser = require('body-parser');


mongoose
  .connect(db)
  .then(() => console.log("connected to mongoDB"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/events', events);

const port = process.env.PORT || 5020
app.listen(port, () => console.log(`listening at port ${port}`));
