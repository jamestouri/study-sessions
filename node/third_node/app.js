const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const events = require("./routes/api/events")
mongoose
  .connect(db)
  .then(() => console.log("connecting to mongo"))
  .catch(err => console.log(err))

app.get("/", (req, res) => res.json("great it works"))
app.use("/events", events)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`the port at ${port} works`))
