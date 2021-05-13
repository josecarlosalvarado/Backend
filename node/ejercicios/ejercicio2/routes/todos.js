const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.post('/', (req,res) => {
    let body = req.body;

    const todo = new Todo({
        title: body.title,
    });

    todo.save((error, savedTodo) => {
        if(error) {
            res.status(400).json({ok: false, error});
        }else {
            res.status(201).json({ok: true, savedTodo});
        }
    })
})


router.get('/', (req,res) => {
    Todo.find({}).exec((error, users) => {
        if(error) {
            res.status(400).json({ok: false, error});
        }else {
            res.status(200).json({ok: true, users});
        }
    })
})

module.exports = router;