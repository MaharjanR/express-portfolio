const express = require('express');

// importing routes
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/projects');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// depending upon the route, one of the following route is selected
app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

// creating error
app.use( (req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

// renders the error page if no routes found
app.use( (err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('./error');
});

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('It is running in localhost:'+ port);
})