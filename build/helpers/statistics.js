"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCantTaskCompleteByTypeFilter = exports.getCantTaskCompleteFilter = exports.getCantTaskComplete = void 0;
const pool_1 = __importDefault(require("@utils/pool"));
const queries_1 = require("@utils/queries");
const pool = pool_1.default.getInstance();
const getCantTaskComplete = async (correo) => {
    const client = await pool.connect();
    try {
        const cantidadTotal = (await client.query(queries_1.queriesStatistics.GET_CANT_TASK, [correo])).rows[0];
        const cantidadTotalCompletada = (await client.query(queries_1.queriesStatistics.GET_CANT_TASK_COMPLETE, [correo])).rows[0];
        const estadistica = {
            cantidadTotal: cantidadTotal.count,
            cantidadTotalCompletada: cantidadTotalCompletada.count
        };
        console.log(estadistica);
        return estadistica;
    }
    catch (e) {
        throw e;
    }
    finally {
        client.release();
    }
};
exports.getCantTaskComplete = getCantTaskComplete;
const getCantTaskCompleteFilter = async ({ correo, tipo }) => {
    const client = await pool.connect();
    try {
        const cantidadTotalCompletada = (await client.query(tipo == 1 ? queries_1.queriesStatistics.GET_CANT_TASK_COMPLETE_MONTH : queries_1.queriesStatistics.GET_CANT_TASK_COMPLETE_DAILY, [correo])).rows[0];
        console.log(cantidadTotalCompletada);
        return cantidadTotalCompletada.count;
    }
    catch (e) {
        throw e;
    }
    finally {
        client.release();
    }
};
exports.getCantTaskCompleteFilter = getCantTaskCompleteFilter;
const getCantTaskCompleteByTypeFilter = async ({ correo, tipo, filtrado }) => {
    const client = await pool.connect();
    try {
        const cantidadTotal = (await client.query(queries_1.queriesStatistics.GET_CANT_TASK_BY_TYPE, [tipo, correo])).rows[0];
        const cantidadTotalCompletada = (await client.query(queries_1.queriesStatistics.GET_CANT_TASK_BY_TYPE_COMPLETE, [tipo, correo])).rows[0];
        const cantidadTotalCompletadaFiltrada = (await client.query(filtrado == 1 ? queries_1.queriesStatistics.GET_CANT_TASK_BY_TYPE_COMPLETE_MONTH : queries_1.queriesStatistics.GET_CANT_TASK_BY_TYPE_COMPLETE_DAILY, [tipo, correo])).rows[0];
        const estadistica = {
            cantidadTotal: cantidadTotal.count,
            cantidadTotalCompletada: cantidadTotalCompletada.count,
            cantidadTotalCompletadaFiltrada: cantidadTotalCompletadaFiltrada.count
        };
        console.log(estadistica);
        return estadistica;
    }
    catch (e) {
        throw e;
    }
    finally {
        client.release();
    }
};
exports.getCantTaskCompleteByTypeFilter = getCantTaskCompleteByTypeFilter;
//# sourceMappingURL=statistics.js.map