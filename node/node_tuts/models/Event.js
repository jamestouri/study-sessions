const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true 
    },
    name: {
        type: String, 
        required: true 
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Event = mongoose.model("events", EventSchema);