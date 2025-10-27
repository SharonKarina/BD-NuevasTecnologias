const express = require("express");
const router = express.Router(); //manejador de rutas de express
const articleSchema = require("../models/articulo");

//Nuevo articulo
router.post("/articulos", (req, res) => {
    const articulo = articleSchema(req.body);
    articulo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los articulos
router.get("/articulos", (req, res) => {
    articleSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un articulo por su id
router.put("/articulos/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, autores, fechaPublicacion, resumen, cantReferencias, nombreBD, nombreRevista, enlace } = req.body;
    articleSchema
        .updateOne({ _id: id }, {
            $set: { titulo, autores, fechaPublicacion, resumen, cantReferencias, nombreBD, nombreRevista, enlace }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un articulo por su id
router.delete("/articulos/:id", (req, res) => {
    const { id } = req.params;
    articleSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;

