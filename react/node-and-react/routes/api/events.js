const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require('../../models/Event');
const validateEventInput = require('../../validation/events');


router.get('/', (req, res) => {
  const event = mongoose.models.events
  event.find()
    .sort({date : - 1})
    .then(events => res.json(events))
});

router.get('/:id', (req, res) => {
  const event = mongoose.models.events;
  event.findById(req.params.id)
    .then(event => res.json(event))
})

router.post('/create', (req, res) => {
    const event = mongoose.models.events;

    const newEvent = new event({
      body: req.body.body
    })
    newEvent.save().then(event => res.json(event));
  }
)

module.exports = router;
