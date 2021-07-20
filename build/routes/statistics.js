"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statistics_1 = require("@helpers/statistics");
const router = express_1.Router();
router.get('/filtrar/:tipo', async (req, res) => {
    try {
        const { tipo } = req.params;
        const estadistica = await statistics_1.getCantTaskCompleteFilter({ correo: req.user.correo, tipo: tipo });
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
});
router.get('/type/', async (req, res) => {
    try {
        const { tipo, filtrado } = req.body;
        const estadistica = await statistics_1.getCantTaskCompleteByTypeFilter({
            correo: req.user.correo,
            tipo: tipo,
            filtrado: filtrado
        });
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
});
router.get('/', async (req, res) => {
    try {
        console.log(req.user.correo);
        const estadistica = await statistics_1.getCantTaskComplete(req.user.correo);
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
});
exports.default = router;
//# sourceMappingURL=statistics.js.map