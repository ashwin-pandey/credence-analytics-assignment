const express = require('express');
const { MoviesRouter } = require('./controller/movies.controller');
const { BadRequestException } = require('./exceptions/exceptions');
const app = express();

require('dotenv').config({path: __dirname + '/.env'});
require('./config/db.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
