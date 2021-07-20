import Pool from '@utils/pool';
import { querysImges } from '@utils/queries';
import { archivo } from '@interfaces/archivo';

const pool = Pool.getInstance();

export const getArchivos=async(id_tarea:number)=>{
    const client = await pool.connect();
    try {
        const response= (await client.query(querysImges.GET_IMAGE_TASK, [id_tarea])).rows;
        const archivos:archivo[]=response.map((rows)=>{
            return{
                idArchivo:rows.id_archivo,
                direccion:rows.direccion,
                titulo:rows.titulo
            } 
        })
        console.log(archivos)
        return archivos;
    } catch (e) {
        throw e;
    }finally{
        client.release();
    }
}

export const insertArchivos= async({archivo, id_tarea} : {archivo:archivo, id_tarea:number})=>{
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response= (await client.query(querysImges.INSERT_IMAGE_TASK, [archivo.direccion, archivo.titulo, id_tarea])).rows;
        const archivos:archivo[]=response.map((rows)=>{
            return{
                direccion:rows.direccion,
                titulo:rows.titulo
            } 
        })
        console.log(archivos)
        await client.query('COMMIT');
        return archivos;
    } catch (e) {
        await client.query('CALLBACK');
        throw e;
    }finally{
        client.release();
    }
}

export const deleteArchivos=async(id_archivo:number)=>{
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response= (await client.query(querysImges.DELETE_IMAGE_TASK, [id_archivo])).rowCount>0;
        console.log(response)
        await client.query('COMMIT');
        return response;
    } catch (e) {
        await client.query('CALLBACK');
        throw e;
    }finally{
        client.release();
    }
}