const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const events = require("./routes/api/events");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
mongoose
  .connect(db)
  .then(() => console.log("Connected to mongodb"))
  .catch(err => console.log(err));


app.use("/api/events", events);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening to port ${port}`))
