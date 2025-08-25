const mongoose = require('mongoose');

const AeronaveSchema = new mongoose.Schema({
    modelo: { type: String, required: true },
    fabricante: { type: String, required: true },
    año_fabricacion: { type: Number, required: true },
    capacidad_pasajeros: { type: Number, required: true },
    longitud: { type: Number, required: true },
    envergadura: { type: Number, required: true },
    peso_maximo_despegue: { type: Number, required: true },
    tipo_motor: { type: String, required: true },
    velocidad_maxima: { type: Number, required: true }
}, {
    // Nombre DB en Mongo
    collection: "Aeronaves"  
});

module.exports = mongoose.model("Aeronave", AeronaveSchema);
