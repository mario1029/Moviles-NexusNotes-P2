"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTags = exports.deleteTask = exports.addTags = exports.searchTask = exports.setCompletada = exports.setPinear = exports.updateTask = exports.getTaskDetails = exports.getTask = exports.insertTask = void 0;
const pool_1 = __importDefault(require("@utils/pool"));
const queries_1 = require("@utils/queries");
const pool = pool_1.default.getInstance();
const insertTask = async ({ tarea, correo }) => {
    const client = await pool.connect();
    const { titulo, contenido, fechaVencimiento, horaVencimiento, fechaNotificacion, horaNotificacion, posicion, tipo } = tarea;
    console.log(tarea, correo);
    try {
        await client.query('BEGIN');
        const response = (await client.query(queries_1.queriesTask.CREATE_TASK, [titulo, contenido, fechaVencimiento, horaVencimiento, fechaNotificacion, horaNotificacion, posicion, tipo, correo])).rows[0];
        const tareas = {
            titulo: response.titulo,
            contenido: response.contenido,
            fechaVencimiento: response.fecha_vencimiento,
            horaVencimiento: response.hora_vencimiento,
            fechaNotificacion: response.fecha_notificacion,
            horaNotificacion: response.hora_notificacion,
            posicion: response.posicion,
            tipo: response.id_tipo
        };
        console.log(tareas);
        await client.query('COMMIT');
        return tareas;
    }
    catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e;
    }
    finally {
        client.release();
    }
};
exports.insertTask = insertTask;
const getTask = async (correo) => {
    const client = await pool.connect();
    try {
        const response = (await client.query(queries_1.queriesTask.GET_TASK, [correo])).rows;
        const tareas = response.map((rows) => {
            return {
                titulo: rows.titulo,
                fechaVencimiento: rows.fecha_vencimiento,
                posicion: rows.posicion,
                pinear: rows.pinear,
                completada: rows.completada
            };
        });
        console.log(tareas);
        return tareas;
    }
    catch (e) {
        throw e;
    }
    finally {
        client.release();
    }
};
exports.getTask = getTask;
const getTaskDetails = async (id) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const tags = (await client.query(queries_1.queriesTask.GET_TAGS, [id])).rows;
        const response = (await client.query(queries_1.queriesTask.GET_TASK_DETAIL, [id])).rows[0];
        const tareas = {
            titulo: response.titulo,
            contenido: response.contenido,
            fechaVencimiento: response.fecha_vencimiento,
            horaVencimiento: response.hora_vencimiento,
            fechaNotificacion: response.fecha_notificacion,
            horaNotificacion: response.hora_notificacion,
            posicion: response.posicion,
            tipo: response.id_tipo,
            tags: tags
        };
        console.log(tareas);
        await client.query('COMMIT');
        return tareas;
    }
    catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e;
    }
    finally {
        client.release();
    }
};
exports.getTaskDetails = getTaskDetails;
const updateTask = async ({ tarea, id }) => {
    const client = await pool.connect();
    const { titulo, contenido, fechaVencimiento, horaVencimiento, fechaNotificacion, horaNotificacion, tipo } = tarea;
    console.log(tarea, id);
    try {
        await client.query('BEGIN');
        const response = (await client.query(queries_1.queriesTask.UPDATE_TASK, [titulo, contenido, fechaVencimiento, horaVencimiento, fechaNotificacion, horaNotificacion, tipo, id])).rows[0];
        const tareas = {
            titulo: response.titulo,
            contenido: response.contenido,
            fechaVencimiento: response.fecha_vencimiento,
            horaVencimiento: response.hora_vencimiento,
            fechaNotificacion: response.fecha_notificacion,
            horaNotificacion: response.hora_notificacion,
            posicion: response.posicion,
            tipo: response.id_tipo
        };
        console.log(tareas);
        await client.query('COMMIT');
        return tareas;
    }
    catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e;
    }
    finally {
        client.release();
    }
};
exports.updateTask = updateTask;
const setPinear = async (id) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response = (await client.query(queries_1.queriesTask.SET_PINEAR, [id])).rows[0];
        const tareas = {
            titulo: response.titulo,
            fechaVencimiento: response.fecha_vencimiento,
            posicion: response.posicion,
            pinear: response.pinear
        };
        console.log(tareas);
        await client.query('COMMIT');
        return tareas;
    }
    catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e;
    }
    finally {
        client.release();
    }
};
exports.setPinear = setPinear;
const setCompletada = async (id) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response = (await client.query(queries_1.queriesTask.SET_COMPLETADA, [id])).rows[0];
        const tareas = {
            titulo: response.titulo,
            fechaVencimiento: response.fecha_vencimiento,
            posicion: response.posicion,
            completada: response.completada
        };
        console.log(tareas);
        await client.query('COMMIT');
        return tareas;
    }
    catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e;
    }
    finally {
        client.release();
    }
};
exports.setCompletada = setCompletada;
const searchTask = async ({ titulo, correo }) => {
    const client = await pool.connect();
    try {
        const response = (await client.query(queries_1.queriesTask.GET_TASK_BY_TITTLE, [titulo, correo])).rows;
        const tareas = response.map((rows) => {
            return {
                titulo: rows.titulo,
                fechaVencimiento: rows.fecha_vencimiento,
                posicion: rows.posicion,
                pinear: rows.pinear,
                completada: rows.completada
            };
        });
        console.log(tareas);
        return tareas;
    }
    catch (e) {
        throw e;
    }
    finally {
        client.release();
    }
};
exports.searchTask = searchTask;
const addTags = async ({ idTag, idTarea }) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response = (await client.query(queries_1.queriesTask.ADD_TAGS, [idTag, idTarea])).rowCount;
        await client.query('COMMIT');
        return response;
    }
    catch (e) {
        await client.query('CALLBACK');
        throw e;
    }
    finally {
        client.release();
    }
};
exports.addTags = addTags;
const deleteTask = async (id) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response = (await client.query(queries_1.queriesTask.DELETE_TASK, [id])).rowCount > 0;
        await client.query('COMMIT');
        return response;
    }
    catch (e) {
        await client.query('CALLBACK');
        throw e;
    }
    finally {
        client.release();
    }
};
exports.deleteTask = deleteTask;
const deleteTags = async ({ idTag, idTarea }) => {
    const client = await pool.connect();
    console.log(idTag, idTarea);
    try {
        await client.query('BEGIN');
        const response = (await client.query(queries_1.queriesTask.DELETE_TAGS, [idTarea, idTag])).rowCount > 0;
        console.log(response);
        await client.query('COMMIT');
        return response;
    }
    catch (e) {
        await client.query('CALLBACK');
        throw e;
    }
    finally {
        client.release();
    }
};
exports.deleteTags = deleteTags;
//# sourceMappingURL=task.js.map