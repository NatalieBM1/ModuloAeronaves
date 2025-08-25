const Aeronave = require("../models/aeronave.model");

// Crear
exports.create = async (req, res) => {
  try {
    const aeronave = await Aeronave.create(req.body);
    res.status(201).json(aeronave);
  } catch (err) {
    res.status(400).json({ message: "Error creando aeronave", error: err.message });
  }
};

// Listar
exports.findAll = async (_req, res) => {
  try {
    const items = await Aeronave.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error listando aeronaves", error: err.message });
  }
};

// Obtener por id
exports.findOne = async (req, res) => {
  try {
    const item = await Aeronave.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Aeronave no encontrada" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: "ID inválido", error: err.message });
  }
};

// Actualizar
exports.update = async (req, res) => {
  try {
    const item = await Aeronave.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!item) return res.status(404).json({ message: "Aeronave no encontrada" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: "Error actualizando", error: err.message });
  }
};

// Eliminar
exports.remove = async (req, res) => {
  try {
    const item = await Aeronave.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Aeronave no encontrada" });
    res.json({ message: "Aeronave eliminada" });
  } catch (err) {
    res.status(400).json({ message: "Error eliminando", error: err.message });
  }
};
