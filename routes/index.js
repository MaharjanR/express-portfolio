const express = require('express');
const router = express.Router();

// getting the projects from the data
const {projects} = require('../data/data.json');

// renders the project view
router.get('/', (req, res) => {
    // passing the projects variable
    res.render('./',{projects: projects});
});

module.exports = router;