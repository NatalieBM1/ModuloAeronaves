const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Importar rutas
const AeronavesRoutes = require('./Routes/AeronavesRoutes');

const app = express();

// Conexión a MongoDB Atlas (Base: Aeronaves)
mongoose.connect('mongodb+srv://admin:admin@pdb.rpwsgda.mongodb.net/Aeronaves')
    .then(() => console.log('Conectado a la base de datos Aeronaves'))
    .catch(err => console.error("Error al conectar a la DB:", err));

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());

// Rutas principales
app.use('/aeronaves', AeronavesRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor y conexión a MongoDB funcionando');
});

// Inicializar servidor
app.listen(3005, () => {
    console.log("Servidor corriendo en el puerto 3005");
});
