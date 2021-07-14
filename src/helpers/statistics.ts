import Pool from '@utils/pool';
import { queriesStatistics } from '@utils/queries';
import { estadisticas } from '@interfaces/estadisticas';

const pool = Pool.getInstance();

export const getCantTaskComplete= async(correo:string): Promise<estadisticas>=>{
    const client = await pool.connect();
    try {
        const cantidadTotal= (await client.query(queriesStatistics.GET_CANT_TASK, [correo])).rows[0];
        const cantidadTotalCompletada= (await client.query(queriesStatistics.GET_CANT_TASK_COMPLETE,[correo])).rows[0];
        const estadistica:estadisticas={
            cantidadTotal:cantidadTotal.count,
            cantidadTotalCompletada:cantidadTotalCompletada.count
        }
        console.log(estadistica)
        return estadistica;
    } catch (e) {
        throw e;
    }finally{
        client.release();
    }
}

export const getCantTaskCompleteFilter= async({correo, tipo}:{correo:string, tipo: number}): Promise<number>=>{
    const client = await pool.connect();
    try {
        const cantidadTotalCompletada= (await client.query(tipo==1? queriesStatistics.GET_CANT_TASK_COMPLETE_MONTH:queriesStatistics.GET_CANT_TASK_COMPLETE_DAILY,[correo])).rows[0];
        console.log(cantidadTotalCompletada)
        return cantidadTotalCompletada.count;
    } catch (e) {
        throw e;
    }finally{
        client.release();
    }
}

export const getCantTaskCompleteByTypeFilter= async({correo, tipo, filtrado}:{correo:string, tipo: number, filtrado:number}): Promise<estadisticas>=>{
    const client = await pool.connect();
    try {
        const cantidadTotal= (await client.query(queriesStatistics.GET_CANT_TASK_BY_TYPE, [tipo,correo])).rows[0];
        const cantidadTotalCompletada=(await client.query(queriesStatistics.GET_CANT_TASK_BY_TYPE_COMPLETE, [tipo,correo])).rows[0]
        const cantidadTotalCompletadaFiltrada= (await client.query(filtrado==1?queriesStatistics.GET_CANT_TASK_BY_TYPE_COMPLETE_MONTH:queriesStatistics.GET_CANT_TASK_BY_TYPE_COMPLETE_DAILY,[tipo,correo])).rows[0];
        const estadistica:estadisticas={
            cantidadTotal:cantidadTotal.count,
            cantidadTotalCompletada:cantidadTotalCompletada.count,
            cantidadTotalCompletadaFiltrada:cantidadTotalCompletadaFiltrada.count
        }
        console.log(estadistica)
        return estadistica;
    } catch (e) {
        throw e;
    }finally{
        client.release();
    }
}