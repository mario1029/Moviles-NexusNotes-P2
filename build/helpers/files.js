"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArchivos = exports.insertArchivos = exports.getArchivos = void 0;
const pool_1 = __importDefault(require("@utils/pool"));
const queries_1 = require("@utils/queries");
const pool = pool_1.default.getInstance();
const getArchivos = async (id_tarea) => {
    const client = await pool.connect();
    try {
        const response = (await client.query(queries_1.querysImges.GET_IMAGE_TASK, [id_tarea])).rows;
        const archivos = response.map((rows) => {
            return {
                idArchivo: rows.id_archivo,
                direccion: rows.direccion,
                titulo: rows.titulo
            };
        });
        console.log(archivos);
        return archivos;
    }
    catch (e) {
        throw e;
    }
    finally {
        client.release();
    }
};
exports.getArchivos = getArchivos;
const insertArchivos = async ({ archivo, id_tarea }) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response = (await client.query(queries_1.querysImges.INSERT_IMAGE_TASK, [archivo.direccion, archivo.titulo, id_tarea])).rows;
        const archivos = response.map((rows) => {
            return {
                direccion: rows.direccion,
                titulo: rows.titulo
            };
        });
        console.log(archivos);
        await client.query('COMMIT');
        return archivos;
    }
    catch (e) {
        await client.query('CALLBACK');
        throw e;
    }
    finally {
        client.release();
    }
};
exports.insertArchivos = insertArchivos;
const deleteArchivos = async (id_archivo) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response = (await client.query(queries_1.querysImges.DELETE_IMAGE_TASK, [id_archivo])).rowCount > 0;
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
exports.deleteArchivos = deleteArchivos;
//# sourceMappingURL=files.js.map