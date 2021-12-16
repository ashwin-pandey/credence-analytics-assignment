const { NotFoundException, BadRequestException } = require('../exceptions/exceptions');
const { Movies } = require('../models/movies.model');

/**
 * GET /movies
 * Purpose - Get all the movies in the database
 */
exports.getAllMovies = (req, res) => {
    Movies.find({}, (error, movies) => {
        if (error) {
            console.log(error);
            res.status(400);
            res.send(new BadRequestException(`Error occurred while fetching the movies`, `${error.message}`));
        } else {
            res.status(200);
            res.send(movies);
        }
    })
};

/**
 * GET /movies/:id
 * Purpose - Get a specific movie
 */
exports.getSpecificMovie = (req, res) => {
    const id = req.params.id;
    // validate the id
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        // it's an invalid ObjectId.
        console.log(`Movie id '${id}' is invalid. Please check again.`);
        res.status(400);
        res.send(new BadRequestException(`Movie id '${id}' is invalid. Please check again.`, `Movie id '${id}' is invalid. Please check again.`));
    }
    Movies.findOne({ "_id": id }, (error, movie) => {
        if (error) {
            console.log(error);
        } else if (movie != null) {
            res.status(200);
            res.send(movie);
        } else {
            res.status(404);
            res.send(new NotFoundException(`Movie with id '${id}' not found.`));
        }
    });
};

/**
 * POST /movies
 * Purpose - Create a new movie
 */
exports.createMovie = (req, res) => {
    Movies.create(req.body, (error, createdMovie) => {
        if (error) {
            console.log(`Error occurred while creating the movie.`, `${error.message}`);
            res.status(400);
            res.send(new BadRequestException(`Error occurred while creating the movie.`, `${error.message}`));
        } else {
            // return the created movie
            console.log(`Movie created - ${createdMovie}`);
            res.status(201);
            res.send(createdMovie);
        }
    });
};

/**
 * PATCH /movies/:id
 */
exports.patchMovie = (req, res) => {
    const id = req.params.id;
    // validate the id
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        // it's an invalid ObjectId.
        console.log(`Movie id '${id}' is invalid. Please check again.`);
        res.status(400);
        res.send(new BadRequestException(`Movie id '${id}' is invalid. Please check again.`, `Movie id '${id}' is invalid. Please check again.`));
    }
    Movies.updateOne({ "_id": id }, { $set: req.body }, (error, updatedMovie) => {
        if (error) {
            console.log(`Error occurred while updating the movie.`, `${error.message}`);
            res.status(400);
            res.send(new BadRequestException(`Error occurred while updating the movie.`, `${error.message}`));
        } else if (updatedMovie.modifiedCount) {
            console.log(`Movie updated successfully - id = ${id}`);
            res.status(200);
            res.send({"message": "Updated Successfully"});
        } else {
            res.status(404);
            res.send(new NotFoundException(`Movie with id '${id}' not found.`));
        }
    });
};

/**
 * DELETE /movies/:id
 * Purpose - Delete a specific movie
 */
exports.deleteMovie = (req, res) => {
    const id = req.params.id;
    // validate the id
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        // it's an invalid ObjectId.
        console.log(`Movie id '${id}' is invalid. Please check again.`);
        res.status(400);
        res.send(new BadRequestException(`Movie id '${id}' is invalid. Please check again.`, `Movie id '${id}' is invalid. Please check again.`));
    }

    Movies.deleteOne({ "_id": id }, (error, movieDeleted) => {
        if (error) {
            console.log(`Error occurred while deleting the movie - ${error}`);
        } else {
            res.status(204);
            res.send({ "message": "Movie deleted!" });
        }
    });
};
