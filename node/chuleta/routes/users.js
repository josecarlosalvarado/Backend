const express = require("express");
const router = express.Router();
const User = require("../models/user");



router.get('/', (req,res) => {
    User.find({}).exec((error, users) => {
        //similar sl find de mongo,
        //si el filtro esta vacio me devuelve todos los documentos de la coleccion.
        if(error) {
            res.status(400).json({ok: false, error});
        }else {
            res.status(200).json({ok: true, users});
        }
    })
})

router.get("/:id", (req,res) => {
    let id = req.params.id;
    res.json({message: `peticion GET con parametro ${id}`})
})

router.post('/', (req,res) => {
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: body.password
    });

    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false, error});
        }else {
            res.status(201).json({ok: true, savedUser});
        }
    })

})

module.exports = router;