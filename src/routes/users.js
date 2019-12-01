const router = require("express").Router();
const mongojs = require("mongojs");
const db = mongojs("cinnemon", ["users"]);



                // CRUD \\

// GET()

//GET ALL USERS
router.get("/users", (req, res, next) =>{
    db.users.find((err, users) => {
        if (err) return next(err);
        res.json(users);
    });
})

//GET USER BY MONGO ID (ID generated automatically by MongoDB)
router.get("/users/:id", (req, res, next) => {
    db.users.findOne({_id: mongojs.ObjectID(req.params.id)}, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });

})

// POST

//POST USER INTO USERS COLLECTION
router.post("/users", (req, res, next) =>{
    const user = req.body;
    if(!user.user || !user.pass){
        res.status(400).json({
            error: "Data error"
        })
    }else{
        db.users.save(user, (err, user) => {
            if (err) return next(err);
            res.json(user)
        })
    }
})

module.exports = router;