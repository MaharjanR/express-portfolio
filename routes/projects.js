const express = require('express');
const router = express.Router();
const {properties} = require('../data/data.json');

router.get('/:id', (req,res) => {

    id = req.params.id;
    let project = '';
    for(var property of properties) {
        if(id === property.id){
            project = property;
        }
      }
      
    res.render('./project', {project});

});

module.exports = router;