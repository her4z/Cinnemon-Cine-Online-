const router = require("express").Router();
const mongojs = require("mongojs");
const db = mongojs("cinnemon", ["users"]);

                // CRUD \\
// GET()

router.get("/users", (req, res, next) =>{
    db.users.find((err, users) => {
        if (err) return next(err);
        res.json(users);
    });
})

router.get("/users/:id", (req, res, next) => {
    db.users.findOne({_id: mongojs.ObjectID(req.params.id)}, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
})

// POST

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