const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configuración de Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Montar las rutas
app.use('/api', require('./routes/api'));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index', { practicas: [] }); // Asegúrate de pasar una variable vacía por defecto
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
