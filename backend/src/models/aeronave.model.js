const mongoose = require("mongoose");

const aeronaveSchema = new mongoose.Schema(
  {
    certificado_aeronavegabilidad: { type: String },
    matricula: { type: String, required: true, unique: true, trim: true },
    nombre_aeronave: { type: String, required: true, trim: true },
    tipo_avion: { type: String },
    capacidad: { type: Number, min: 0 },
    clase_servicio: { type: String },
    combustible: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Aeronave", aeronaveSchema);
