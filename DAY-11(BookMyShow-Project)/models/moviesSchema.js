const mongoose = require('mongoose');

const schema = mongoose.Schema({
    poster: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: false
    },
    votes: {
        type: String,
        required: false
    },
    dimentions: {
        type: String,
        required: true
    },
    languages: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genere: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: false
    }
})

const movieSchema = mongoose.model("movie", schema);

module.exports = movieSchema