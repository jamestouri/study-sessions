const express = require("express");
const app = express();
const router = express.Router();

const users = require('./routes/api/users');
const events = require("./routes/api/events");

router.get("/", (req, res) => res.json("testing"))
app.use('/users', users)
app.use('/events', events)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = router;