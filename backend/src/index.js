require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./src/config/db");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Conectar BD
connectDB();

// Rutas
app.use("/api/aeronaves", require("./src/routes/aeronaves.routes"));

// Healthcheck
app.get("/", (_req, res) => res.send("API Módulo Aeronaves ✅"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
