const express = require('express');
const app = express();

app.use((req,res) => {
    console.log('Its working');
    res.send('Hi Everyone');
})

app.listen(3000, () =>{
    console.log('It is running in localhost:3000');
})