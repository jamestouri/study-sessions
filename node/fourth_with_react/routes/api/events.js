const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Event = require("../../models/Event")
const validateEventInput = require("../../validation/event")

router.get("/", (req, res) => {
  Event.find()
    .sort({date: -1 })
    .then(events => res.json(events))
});

router.get("/:id", (req, res) => {
  Event.findbyId(req.params.id)
    .then(event => res.json(event))
})

router.post("/create", (req, res) => {
  let event = mongoose.models.events;
  const newEvent = new event({
    text: req.body.text
  })
  newEvent.save().then(event => res.json(event));
})

module.exports = router;
