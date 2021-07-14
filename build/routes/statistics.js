"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statistics_1 = require("@helpers/statistics");
const router = express_1.Router();
router.get('/filtrar/:correo', async (req, res) => {
    try {
        const { tipo } = req.body;
        const estadistica = await statistics_1.getCantTaskCompleteFilter({ correo: req.params.correo, tipo: tipo });
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
});
router.get('/type/:correo', async (req, res) => {
    try {
        const { tipo, filtrado } = req.body;
        const estadistica = await statistics_1.getCantTaskCompleteByTypeFilter({
            correo: req.params.correo,
            tipo: tipo,
            filtrado: filtrado
        });
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
});
router.get('/:correo', async (req, res) => {
    try {
        console.log(req.params.correo);
        const estadistica = await statistics_1.getCantTaskComplete(req.params.correo);
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
});
exports.default = router;
//# sourceMappingURL=statistics.js.map