const express = require("express");
const router = express.Router(); //manejador de rutas de express
const articleSchema = require("../models/articulo");
//Nuevo animal
router.post("/articulos", (req, res) => {
    const articulo = articleSchema(req.body);
    articulo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
