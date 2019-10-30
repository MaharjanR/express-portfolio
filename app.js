const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use('/', (req,res) => {
    console.log('Its working');
    res.render('./views/index');
})

app.listen(3000, () =>{
    console.log('It is running in localhost:3000');
})