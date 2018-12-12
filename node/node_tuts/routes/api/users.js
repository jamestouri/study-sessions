const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jsonwebtoken = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/", (req, res) => res.json({ msg: "This is the users route" }));

router.get("/current", passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    })
})

router.post("/register", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.user.email})
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "Email used already"})
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password 
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err; 
                        newUser.password = hash; 
                        newUser
                            .save()
                            .then(user => {
                                const payload = { id: user.id, name: user.name};
                                jsonwebtoken.sign(payload, keys.secretOrKey, { expiresIn: 3600}, (err, token) => {
                                    res.join({
                                        success: true,
                                        token: "Bearer " + token
                                    })
                                })
                            })
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})


router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }


    User.findOne({email})
        .then(user => {
            if(!user) {
                return res.status(400).json({email: "wrong email"})
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {id: user.id, name: user.name};

                        jsonwebtoken.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.join({
                                    success: true,
                                    token: "Bearer " + token
                            })
                        })
                    } else {
                        return res.status(400).json({password: "Incorrect Password"})
                    }
                })
        })
})


module.exports = router;

