const router = require("express").Router();
const mongojs = require("mongojs");
const db = mongojs("cinnemon", ["seatsSold"]);

            //CRUD\\

// GET

//GET ALL SEATS SOLD
router.get("/seatsSold", (req, res, next) => {
    db.seatsSold.find((err, seatsSold) =>  {
        if (err) return next(err);
        res.json(seatsSold);
    });
})

//GET SEATS SOLD FOR A FUNCTION.
router.get("/seatsSold/:idFunction", (req, res, next) => {
    db.seatsSold.find({idFunction: mongojs.Int32(req.params.idFunction)}, (err, seatsSold) =>{
        if (err) return next(err);
        res.json(seatsSold);
    });
})

//POST

//POST A SEAT SOLD INTO SEATSSOLD COLLECTION IN DB
router.post("/seatsSold", (req, res, next) =>{
    const seatSold = req.body;
    db.seatsSold.save(seatsSold, (err, seatsSold) =>{
        if (err) return next(err);
        res.json(seatSold)
    });
})

module.exports = router;