const express = require('express');
const router = express.Router();

const Heroes = require('../../models/Heroes');

//@route    GET api/heroes
//@desc     Get all heroes
//@access   Public
router.get('/', (req, res) => {
    Heroes.find()
        .sort({ class: 1 })
        .then(heroes => res.json(heroes))
});

//@route    GET api/heroes/knights
//@desc     Get knight heroes
//@access   Public
router.get('/knights', (req, res) => {
    Heroes.find({ class: 'Knight' })
        .sort({ name: 1 })
        .then(heroes => res.json(heroes))
});

//@route    POST api/heroes
//@desc     Create a hero
//@access   Public
router.post('/', (req, res) => {
    try{
        const newHero = new Heroes({
            name: req.body.name,
            class: req.body.class,
            avatar: req.body.avatar,
            type: req.body.type,
            classification: req.body.classification,
            rating: req.body.rating,
            uwreliance: req.body.uwreliance
        });
        newHero.save().then(hero => res.json(hero));
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;