const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/practicas', async (req, res) => {
    const identificacion = req.query.identificacion;

    if (!identificacion) {
        return res.status(400).render('index', { practicas: [], error: 'Identificación es requerida' });
    }

    try {
        // Solicitar información de las prácticas del docente
        const response = await axios.get(`http://localhost:8080/api/docentes/${identificacion}/practicas`);
        const practicas = response.data;

        // Verifica si practicas es una lista y tiene elementos
        if (Array.isArray(practicas) && practicas.length > 0) {
            res.render('index', { practicas, error: '' });
        } else {
            res.render('index', { practicas: [], error: 'No se encontraron prácticas para la identificación proporcionada.' });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.render('index', { practicas: [], error: 'Error al obtener datos. Por favor, inténtelo de nuevo más tarde.' });
    }
});

module.exports = router;
