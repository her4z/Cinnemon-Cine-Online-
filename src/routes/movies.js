const router = require("express").Router();
const mongojs = require("mongojs");
const db = mongojs("cinnemon", ["movies"]);

        //CRUD\\

// GET

//GET ALL MOVIES
router.get("/movies", (req, res, next) => {
    db.movies.find((err, movies) =>  {
        if (err) return next(err);
        res.json(movies);
    });
})

//GET MOVIE BY MONGO ID (ID generated automatically by MongoDB)
//router.get("/movies/:id", (req, res, next) => {
    //db.movies.findOne({_id: mongojs.ObjectID(req.params.id)}, (err, movie) => {
     //   if (err) return next(err);
       // res.json(movie);
   // });
//})

//GET MOVIE BY MOVIE ID
router.get("/movies/:idMovie", (req, res, next) => {
    db.movies.findOne({idMovie: mongojs.Int32(req.params.idMovie)}, (err, movie) =>{
        if (err) return next(err);
        res.json(movie);
    });
})
module.exports = router;