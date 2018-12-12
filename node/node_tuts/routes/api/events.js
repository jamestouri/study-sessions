const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');

const Event = require("../../models/Event");
const validateEventInput = require("../../validation/events");

router.get("/", (req, res) => {
    Event.find()
        .sort({date: -1})
        .then(events => res.join(events))
        
});

router.get('./:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => res.join(event))
        .catch(err => res.status(404).json({noeventfound: 'none found'}))
})

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateEventInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newEvent = new Event({
            text: req.body.text,
            name: req.body.name,
            user: req.user.id
        });

        newEvent.save().then(event => res.json(event));
    }
);
module.exports = router;