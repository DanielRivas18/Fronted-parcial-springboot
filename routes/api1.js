const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/practicas/estudiantes', (req, res) => {
    res.render('Page2', { estudiantes: [], error: '' });
});


router.get('/practicas/:id/estudiantes', async (req, res) => {
    const practicaId = req.params.id;

    try {
        const response = await axios.get(`http://localhost:8080/api/practicas/${practicaId}/estudiantes`);
        const estudiantes = response.data;

        if (Array.isArray(estudiantes) && estudiantes.length > 0) {
            res.render('Page2', { estudiantes, error: '' });
        } else {
            res.render('Page2', { estudiantes: [], error: 'No se encontraron estudiantes para la práctica proporcionada.' });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.render('Page2', { estudiantes: [], error: 'Error al obtener datos. Posible ID de práctica no existente.' });
    }
});

module.exports = router;
