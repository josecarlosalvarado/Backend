const express = require('express');
require("./config/config");

const app = express();

app.use(express.json());

let users = [];


app.get("/:users", (req,res) => {
    const user = {name:"carlos", email: "carlos@gmail.com"}
    res.json({ok:true, results: users})
});

app.put("/:id", (req,res) => {
    const id = req.params.id;

    res.json({id})
});

app.delete("/:id", (req,res) => {
    const id = req.params.id;

    const removeUser = users.splice(id, 1)

    res.status(200).json(removeUser);
});

app.post("/", (req,res) => {
    const body = req.body;

    if (!body.name) {
        res.status(400).json({ ok: false, message: "name is required"});
    }else {
        users.push(body);
        res.status(201).json({user: body});
    }
});


app.listen(process.env.PORT, () => {
    console.log("listening on port:", process.env.PORT);
});