const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Event = mongoose.model('events', EventSchema);
module.export = Event;
