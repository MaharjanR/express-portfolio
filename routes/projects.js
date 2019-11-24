const express = require('express');
const router = express.Router();
// getting the projects from the data
const {projects} = require('../data/data.json');

// depending upon the route id, project is generated
router.get('/:id', (req,res) => {

    id = req.params.id;
    // generates error if the id is greater than the projects length
    if(id > projects.length){
        res.redirect('../error');
    }
    let project = '';

    // saving the data of project which matches the id and route id
    for(var data of projects) {
        if(id === data.id){
            project = data;
        }
      }
      
    // sending data of the matching project and rendering project view
    res.render('./project', {project});

});

module.exports = router;