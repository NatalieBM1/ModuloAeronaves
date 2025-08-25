const express = require("express");
const router = express.Router();
const Aeronave = require("../Models/AeronaveModel");

// CREATE - Agregar una aeronave
router.post("/", async (req, res) => {
    try {
        const aeronave = new Aeronave(req.body);
        await aeronave.save();
        res.status(201).json(aeronave);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ - Listar todas las aeronaves
router.get("/", async (req, res) => {
    try {
        const aeronaves = await Aeronave.find();
        res.json(aeronaves);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ - Obtener una aeronave por ID
router.get("/:id", async (req, res) => {
    try {
        const aeronave = await Aeronave.findById(req.params.id);
        if (!aeronave) return res.status(404).json({ message: "Aeronave no encontrada" });
        res.json(aeronave);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE - Modificar aeronave por ID
router.put("/:id", async (req, res) => {
    try {
        const aeronave = await Aeronave.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!aeronave) return res.status(404).json({ message: "Aeronave no encontrada" });
        res.json(aeronave);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE - Eliminar aeronave por ID
router.delete("/:id", async (req, res) => {
    try {
        const aeronave = await Aeronave.findByIdAndDelete(req.params.id);
        if (!aeronave) return res.status(404).json({ message: "Aeronave no encontrada" });
        res.json({ message: "Aeronave eliminada correctamente" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
