const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jsonwebtoken = require("jsonwebtoken");
const keys = require("../../config/keys");


router.get("/", (req, res) => res.json({ msg: "fuck yeah" }));

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
        .then(user => {
            if(!user) {
                return res.status(404).json({ email: "email not gone" }) 
            } 
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        res.json({ msg: 'Success' });
                    } else {
                        return res.status(400).json({ password: 'Incorrect password' });
                    }
            })
        
        })
})

router.post("/register", (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user) {
                return res.status(404).json({email: "email already used "})
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
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

module.exports = router;