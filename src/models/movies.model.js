/** MOVIES MODEL */
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    yearOfRelease: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    numberOfAwards: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: () => Date.now() + 7*24*60*60*1000
    },
    modifiedDate: {
        type: Date,
        default: () => Date.now() + 7*24*60*60*1000
    }
});

const Movies = mongoose.model('Movies', MovieSchema);
module.exports = { Movies };