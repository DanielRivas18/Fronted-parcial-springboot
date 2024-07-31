const express = require('express');
const router = express.Router();
const axios = require('axios');

// Obtener estudiantes por ID de práctica
router.get('/practicas/:id/estudiantes', async (req, res) => {
    const practicaId = req.params.id;

    try {
        const response = await axios.get(`http://localhost:8080/api/practicas/${practicaId}/estudiantes`);
        const estudiantes = response.data;

        if (Array.isArray(estudiantes) && estudiantes.length > 0) {
            res.render('ViewEstudiantes', { estudiantes, error: '' });
        } else {
            res.render('ViewEstudiantes', { estudiantes: [], error: 'No se encontraron estudiantes para la práctica proporcionada.' });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.render('ViewEstudiantes', { estudiantes: [], error: 'Error al obtener datos. Posible ID de práctica no existente.' });
    }
});

module.exports = router;
