const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({msg: 'ji'}))


router.post("/", password.authenticate('jwt', {session: false}), (req, res) => {
    const { errors, isValid} = validateEventInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const newEvent = new Event({
        text: req.body.text, 
        name: req.body.name,
        user: req.user.id 
    });

    newEvent.save().then(event => res.json(event));
})
module.exports = router;
