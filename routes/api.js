const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/practicas', async (req, res) => {
    const identificacion = req.query.identificacion;

    if (!identificacion) {
        return res.status(400).render('index', { practicas: [], error: 'Identificación es requerida' });
    }

    try {
        const response = await axios.get(`http://localhost:8080/api/docentes/${identificacion}/practicas`);
        const practicas = response.data;

        if (Array.isArray(practicas) && practicas.length > 0) {
            res.render('ViewPracticas', { practicas, error: '' });
        } else {
            res.render('ViewPracticas', { practicas: [], error: 'No se encontraron prácticas para la identificación proporcionada.' });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.render('ViewPracticas', { practicas: [], error: 'Error al obtener datos. Posible identificador no existente.' });
    }
});

module.exports = router;
