const router = require("express").Router();
const mongojs = require("mongojs");
const db = mongojs("cinnemon", ["tickets"]);

        //CRUD\\

// GET

//GET ALL TICKETS
router.get("/tickets", (req, res, next) => {
    db.tickets.find((err, tickets) => {
        if (err) return next(err);
        res.json(tickets);
    });
})

//POST

//POST A TICKET
router.post("/tickets", (req, res, next) => {
    const ticket = req.body;
    db.tickets.save(ticket, (err, ticket) =>{
        if (err) return next(err);
        res.json(ticket);
    });
})