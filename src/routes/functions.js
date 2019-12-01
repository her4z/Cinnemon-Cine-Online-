const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('cinnemon', ['functions']);

        //CRUD

//GET

//GET ALL FUNCTIONS
router.get('/functions', (req, res, next) => {
    db.functions.find((err, functions) => {
        if(err) return next(err);
        res.json(functions);
    });
})

//GET ALL FUNCTIONS BY MOVIEID

router.get('/functions/:idMovie', (req, res, next) => {
    db.functions.find({idMovie: mongojs.Int32(req.params.idMovie)}, (err, functions) =>{
        if (err) return next(err);
        res.json(functions);
    });
})

//GET FUNCTIONS BY MOVIEID AND DAY
router.get('/functions/:idMovie/:day', (req, res , next) =>{
    db.functions.find({idMovie: mongojs.Int32(req.params.idMovie), day: String(req.params.day)}, (err, functions) =>{
        if (err) return next(err);
        res.json(functions);
    });
})

//GET FUNCTIONS BY MOVIEID, DAY AND TYPEID
router.get('/functions/:idMovie/:day/:idType', (req, res, next) =>{
    db.functions.find({idMovie: mongojs.Int32(req.params.idMovie), day: String(req.params.day), idType: mongojs.Int32(req.params.idType)}, (err, functions) =>{
        if (err) return next(err);
        res.json(functions);
    });
})
module.exports = router;