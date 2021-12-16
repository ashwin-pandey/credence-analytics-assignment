const express = require('express');
const router = express.Router();
const moviesController = require('../controller/movies.controller');

router.get('/movies', moviesController.getAllMovies);
router.get('/movies/:id', moviesController.getSpecificMovie);
router.post('/movies', moviesController.createMovie);
router.patch('/movies/:id', moviesController.patchMovie);
router.delete('/movies/:id', moviesController.deleteMovie);

const MoviesRouter = router;
module.exports = { MoviesRouter };