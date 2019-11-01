const express = require('express');
const router = express.Router();
const {properties} = require('../data/data.json');

router.get('/', (req, res) => {
    res.render('./',{projects: properties});
});

module.exports = router;