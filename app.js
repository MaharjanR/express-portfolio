const express = require('express');
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/projects');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

app.use( (req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

app.use( (err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('./error');
});

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('It is running in localhost:'+ port);
})