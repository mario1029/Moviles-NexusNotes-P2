"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("@helpers/task");
const fields_1 = require("@validations/fields");
const router = express_1.Router();
router.post('/news/:correo', fields_1.taskValidation, fields_1.checkResult, async (req, res) => {
    try {
        console.log(req.body, req.params.correo);
        const tarea = await task_1.insertTask({
            tarea: req.body,
            correo: req.params.correo
        });
        console.log('hola');
        console.log(tarea);
        res.status(200).json({ status: 200, tarea: tarea, message: 'Tarea creada!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al crear la tarea' });
    }
});
router.get('/lista/:correo', async (req, res) => {
    try {
        const tareas = await task_1.getTask(req.params.correo);
        console.log(tareas);
        res.status(200).json({ status: 200, tareas: tareas, message: 'Tareas encontradas!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar la tarea' });
    }
});
router.delete('/Tags', async (req, res) => {
    console.log('hola');
    try {
        console.log('hola');
        const { idTag, idTarea } = req.body;
        console.log(idTag, idTarea);
        const datos = await task_1.deleteTags({ idTag: idTag, idTarea: idTarea });
        res.status(200).json({ status: 200, data: datos, message: datos ? 'Se borro el tag de la tarea' : 'no se borro ningun tag' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al agregar el tag a la tarea' });
    }
});
router.post('/Tags', async (req, res) => {
    try {
        const { idTag, idTarea } = req.body;
        const data = await task_1.addTags({ idTag: idTag, idTarea: idTarea });
        res.status(200).json({ status: 200, message: `se agrego ${data} tag a la tarea` });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al agregar el tag a la tarea' });
    }
});
router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const tarea = await task_1.getTaskDetails(+req.params.id);
        console.log(tarea);
        res.status(200).json({ status: 200, tarea: tarea, message: 'Detalles de la tarea!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al Detalar la tarea' });
    }
});
router.put('/:id', fields_1.taskValidation, fields_1.checkResult, async (req, res) => {
    try {
        console.log(req.body, req.params.id);
        const tarea = await task_1.updateTask({
            tarea: req.body,
            id: +req.params.id
        });
        console.log('hola');
        console.log(tarea);
        res.status(200).json({ status: 200, tarea: tarea, message: 'Tarea actualizada!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al actualizar la tarea' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const tareaBorrada = await task_1.deleteTask(+req.params.id);
        res.status(200).json({ status: 200, tarea: tareaBorrada, message: tareaBorrada ? 'Tarea borrada!' : 'No se ha borrado ninguna tarea' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al borrar la tarea' });
    }
});
router.put('/pinear/:id', async (req, res) => {
    try {
        const tarea = await task_1.setPinear(+req.params.id);
        res.status(200).json({ status: 200, tarea: tarea, message: 'Tarea actualizada!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al actualizar la tarea' });
    }
});
router.put('/completar/:id', async (req, res) => {
    try {
        const tarea = await task_1.setCompletada(+req.params.id);
        res.status(200).json({ status: 200, tarea: tarea, message: 'Tarea actualizada!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al actualizar la tarea' });
    }
});
router.get('/search/:titulo', async (req, res) => {
    try {
        const tareas = await task_1.searchTask({ titulo: req.params.titulo, correo: req.body.correo });
        console.log(tareas);
        res.status(200).json({ status: 200, tareas: tareas, message: 'Tareas encontradas!' });
    }
    catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar la tarea' });
    }
});
exports.default = router;
//# sourceMappingURL=task.js.map