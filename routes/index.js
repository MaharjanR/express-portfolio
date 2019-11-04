const express = require('express');
const router = express.Router();
const {projects} = require('../data/data.json');

router.get('/', (req, res) => {
    res.render('./',{projects: projects});
});

module.exports = router;