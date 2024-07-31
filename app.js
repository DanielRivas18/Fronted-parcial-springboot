const express = require('express');
const path = require('path');
const practicasRouter = require('./routes/api'); 
const estudiantesRouter = require('./routes/api1'); 

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', practicasRouter); 
app.use('/api1', estudiantesRouter); 


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/viewPracticas', (req, res) => {
    res.render('ViewPracticas', { practicas: [], error: '' });
});


app.get('/page2', (req, res) => {
    res.render('Page2', { practicas: [], error: '' }) 
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
