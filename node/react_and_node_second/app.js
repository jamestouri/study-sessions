const express = require("express");
const app = express();


app.get('/', (req, res) => res.json("great stuff"))
const port  = process.env.PORT || 5020;

app.listen(port, () => console.log(`listening to port ${port}`));
