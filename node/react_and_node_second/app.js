const express = require("express");
const app = express();
const mongoose = require(`mongoose`);
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDb"))

app.get('/', (req, res) => res.json("great stuff"))
const port  = process.env.PORT || 5020;

app.listen(port, () => console.log(`listening to port ${port}`));
