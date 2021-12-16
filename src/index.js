const express = require('express');
const { MoviesRouter } = require('./router/movies.router');
const app = express();

/**ENV CONFIG */
require('dotenv').config({path: __dirname + '/.env'});
/**DATABASE CONFIG */
require('./config/db.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**CORS HEADERS */
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT , PATCH, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,  x-xsrf-token, Content-Type, Authorization"
    );
    next();
});

/**ROUTE HANDLER */
app.use('/', MoviesRouter);

/**START SERVER */
const port = process.env.PORT;
app.listen(port, (error) => {
    if (error) {
        console.log(`Error listening on port ${port} - ${error}`);
    } else {
        console.log(`Listening on port ${port}`);
    }
});
