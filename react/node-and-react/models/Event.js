const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  body : {
    type: String,
    required: true
  },
  date : {
    type: Date,
    default: Date.now
  }
})

module.exports = Event = mongoose.model('events', EventSchema);
