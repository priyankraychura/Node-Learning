const movieSchema = require('../models/moviesSchema');
const fs = require('fs');


module.exports.homePage = async (req, res) => {
    await movieSchema.find().then((movies) => {
        res.render('index', {movies});
    })
}

module.exports.addMoviePage = (req, res) => {
    res.render('addMovie')
}

module.exports.addMovie = async (req, res) => {
    req.body.poster = req.file.path

    await movieSchema.create(req.body).then(() => {
        res.redirect('/');
    })
}

module.exports.deleteMovie = async (req, res) => {
    await movieSchema.findByIdAndDelete(req.params.id).then(() => {
        res.redirect('/');
    })
}

module.exports.editMoviePage = async (req, res) => {
    await movieSchema.findById(req.params.id).then((singleMovie) => {
        res.render('editMovie', {singleMovie});
    })
}

module.exports.editMovie = async (req, res) => {
    let singleMovie = await movieSchema.findById(req.body.id);
    let img = ''

    req.file ? img = req.file.path : img = singleMovie.poster
    req.file && fs.unlinkSync(singleMovie.poster);
    req.body.poster = img

    await movieSchema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect('/');
    })

}