const Celebrity = require("../models/Celebrity.model")
const Movie = require("../models/Movie.model")
const router = require("express").Router();

router.get("/movies/create",(req,res,next)=>{
    Celebrity.find()
        .then((celebrityFound) => {
            console.log(celebrityFound)
            res.render('movies/new-movie', {
                celebrities: celebrityFound
            })
        })
        .catch(error => {console.log("ERROR EN: /movies/create",error)})
})

router.post("/movies/create",(req,res,next)=>{
    const {title, genre, plot, cast}= req.body
    Movie.create({title, genre, plot, cast})
        .then(() => {
            res.redirect('/movies')
        })
        .catch((error) => {
            console.log("ERROR EN: /movies/create",error)
            res.render('movies/new-movie')
        })
})

router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render('movies/movies', {movies})
        })
        .catch(error => {console.log("ERROR EN: /movies",error)})
})




module.exports = router