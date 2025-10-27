const mongoose = require("mongoose"); // importando el componente mogoose
const articleSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    autores: {
        type: String,
        required: true,
    },
    fechaPublicacion: {
        type: Number,
        required: true,
    },
    resumen: {
        type: String,
        requiered: true,
    },
    cantReferencias: {
        type: Number,
        required: true,
    },
    nombreBD: {
        type: String,
        required: true,
    },
    nombreRevista: {
        type: String,
        required: true,
    },
    enlace: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Articulo", articleSchema);

/*
formato para creacion en Postman 

*fechaPublicacion se refiere solo al año.

{
    "titulo": "",
    "autores": "",
    "fechaPublicacion": 0,
    "resumen": "",
    "cantReferencias": 0,
    "nombreBD": "",
    "nombreRevista": "",
    "enlace": ""
}
    

*/