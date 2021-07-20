"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const files_1 = require("@helpers/files");
const router = express_1.Router();
router.get('/:idTarea', async (req, res) => {
    try {
        const archivo = await files_1.getArchivos(+req.params.idTarea);
        console.log(archivo);
        res.status(200).json({ status: 200, archivos: archivo, message: 'Archivos encontrados!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar los archivo' });
    }
});
router.post('/:idTarea', async (req, res) => {
    try {
        const archivo = await files_1.insertArchivos({
            archivo: req.body,
            id_tarea: +req.params.idTarea
        });
        res.status(200).json({ status: 200, archivos: archivo, message: 'Archivos encontrados!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar los archivo' });
    }
});
router.delete('/:idArchivo', async (req, res) => {
    try {
        const archivo = await files_1.deleteArchivos(+req.params.idArchivo);
        res.status(200).json({ status: 200, archivos: archivo, message: 'Archivos encontrados!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar los archivo' });
    }
});
exports.default = router;
//# sourceMappingURL=file.js.map