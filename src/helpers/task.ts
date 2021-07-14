import Pool from '@utils/pool';
import { queriesTask } from '@utils/queries';
import { tareaDetallada, tarea } from '@interfaces/tarea';

const pool = Pool.getInstance();

export const insertTask = async({tarea, correo} : {tarea:tareaDetallada, correo:string}):  Promise<tareaDetallada>=>{
    const client = await pool.connect();
    const {titulo,contenido,fechaVencimiento,horaVencimiento,fechaNotificacion,horaNotificacion,tipo}=tarea;
    console.log(tarea, correo)
    try {
        await client.query('BEGIN');
        const response= (await client.query(queriesTask.CREATE_TASK, [titulo,contenido,fechaVencimiento,horaVencimiento,fechaNotificacion,horaNotificacion,tipo,correo])).rows[0];
        const tareas:tareaDetallada={
            titulo:response.titulo,
            contenido:response.contenido,
            fechaVencimiento:response.fecha_vencimiento,
            horaVencimiento:response.hora_vencimiento,
            fechaNotificacion:response.fecha_notificacion,
            horaNotificacion:response.hora_notificacion,
            posicion:response.posicion,
            tipo:response.id_tipo
        };
        console.log(tareas)
        await client.query('COMMIT');
        return tareas;
    } catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e
    }finally{
        client.release();
    }
}

export const getTask= async(correo:string): Promise<tarea[]> =>{
    const client = await pool.connect();
    try {
        const response= (await client.query(queriesTask.GET_TASK, [correo])).rows;
        const tareas:tarea[]=response.map((rows)=>{
            return{
                titulo:rows.titulo,
                fechaVencimiento:rows.fecha_vencimiento,
                posicion:rows.posicion,
                pinear:rows.pinear,
                completada:rows.completada
            } 
        })
        console.log(tareas)
        return tareas;
    } catch (e) {
        throw e;
    }finally{
        client.release();
    }
}

export const getTaskDetails= async( id:number):  Promise<tareaDetallada>=>{
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const tags:string[]= (await client.query(queriesTask.GET_TAGS,[id])).rows;
        const response= (await client.query(queriesTask.GET_TASK_DETAIL, [id])).rows[0];
        const tareas:tareaDetallada={
            titulo:response.titulo,
            contenido:response.contenido,
            fechaVencimiento:response.fecha_vencimiento,
            horaVencimiento:response.hora_vencimiento,
            fechaNotificacion:response.fecha_notificacion,
            horaNotificacion:response.hora_notificacion,
            posicion:response.posicion,
            tipo:response.id_tipo,
            tags:tags
        };
        console.log(tareas)
        await client.query('COMMIT');
        return tareas;
    } catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e
    }finally{
        client.release();
    }
}

export const updateTask= async({tarea, id} : {tarea:tareaDetallada, id:number}):  Promise<tarea>=>{
    const client = await pool.connect();
    const {titulo,contenido,fechaVencimiento,horaVencimiento,fechaNotificacion,horaNotificacion,tipo}=tarea;
    console.log(tarea, id);
    try {
        await client.query('BEGIN');
        const response= (await client.query(queriesTask.UPDATE_TASK, [titulo,contenido,fechaVencimiento,horaVencimiento,fechaNotificacion,horaNotificacion,tipo,id])).rows[0];
        const tareas:tareaDetallada={
            titulo:response.titulo,
            contenido:response.contenido,
            fechaVencimiento:response.fecha_vencimiento,
            horaVencimiento:response.hora_vencimiento,
            fechaNotificacion:response.fecha_notificacion,
            horaNotificacion:response.hora_notificacion,
            posicion:response.posicion,
            tipo:response.id_tipo
        };
        console.log(tareas)
        await client.query('COMMIT');
        return tareas;
    } catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e
    }finally{
        client.release();
    }
}

export const setPinear= async (id:number):  Promise<tarea>=>{
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response= (await client.query(queriesTask.SET_PINEAR, [id])).rows[0];
        const tareas:tarea={
            titulo:response.titulo,
            fechaVencimiento:response.fecha_vencimiento,
            posicion:response.posicion,
            pinear:response.pinear
        };
        console.log(tareas)
        await client.query('COMMIT');
        return tareas;
    } catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e;
    } finally{
        client.release();
    }
}

export const setCompletada= async(id:number):  Promise<tarea>=>{
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response= (await client.query(queriesTask.SET_COMPLETADA, [id])).rows[0];
        const tareas:tarea={
            titulo:response.titulo,
            fechaVencimiento:response.fecha_vencimiento,
            posicion:response.posicion,
            completada:response.completada
        };
        console.log(tareas)
        await client.query('COMMIT');
        return tareas;
    } catch (e) {
        await client.query('CALLBACK');
        console.log(e);
        throw e;
    } finally{
        client.release();
    }
}

export const searchTask= async({titulo, correo}: {titulo:string, correo:string}):  Promise<tarea[]>=>{
    const client = await pool.connect();
    try {
        const response= (await client.query(queriesTask.GET_TASK_BY_TITTLE, [titulo, correo])).rows;
        const tareas:tarea[]=response.map((rows)=>{
            return{
                titulo:rows.titulo,
                fechaVencimiento:rows.fecha_vencimiento,
                posicion:rows.posicion,
                pinear:rows.pinear,
                completada:rows.completada
            } 
        })
        console.log(tareas)
        return tareas;
    } catch (e) {
        throw e;
    }finally{
        client.release();
    }
}

export const addTags= async({idTag, idTarea} : {idTag:number, idTarea:number})=>{
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response= (await client.query(queriesTask.ADD_TAGS, [idTag, idTarea])).rowCount;
        await client.query('COMMIT');
        return response;
    } catch (e) {
        await client.query('CALLBACK');
        throw e;
    }finally{
        client.release();
    }
}

export const deleteTask= async(id:number): Promise<boolean>=>{
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const response= (await client.query(queriesTask.DELETE_TASK, [id])).rowCount>0;
        await client.query('COMMIT');
        return response;
    } catch (e) {
        await client.query('CALLBACK');
        throw e;
    }finally{
        client.release();
    }
}

export const deleteTags= async({idTag, idTarea} : {idTag:number, idTarea:number})=>{
    const client = await pool.connect();
    console.log(idTag,idTarea)
    try {
        await client.query('BEGIN');
        const response= (await client.query(queriesTask.DELETE_TAGS, [idTarea, idTag])).rowCount>0;
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