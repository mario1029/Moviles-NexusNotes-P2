import { Router } from 'express';
import { isAuth } from '@validations/auth';
import {addTags, deleteTags, deleteTask, getTask, getTaskDetails, insertTask, searchTask, setCompletada, setPinear, updateTask} from '@helpers/task';
import { tarea } from '@interfaces/tarea';
import { taskValidation, checkResult } from '@validations/fields';

const router = Router();

router.post('/news/:correo', taskValidation, checkResult, async(req, res)=>{
    try {
        console.log(req.body,req.params.correo)
        const tarea= await insertTask({
            tarea:req.body,
            correo:req.params.correo
        });
        console.log('hola');
        console.log(tarea)
        res.status(200).json({ status: 200, tarea: tarea, message: 'Tarea creada!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al crear la tarea' });
    }
})

router.get('/lista/:correo', async(req, res)=>{
    try {
        const tareas:tarea[]=await getTask(req.params.correo);
        console.log(tareas)
        res.status(200).json({ status: 200, tareas: tareas, message: 'Tareas encontradas!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar la tarea' });
    }
})

router.delete('/Tags', async(req, res)=>{
    console.log('hola');
    try {
        console.log('hola');
        const {idTag, idTarea}=req.body;
        console.log(idTag,idTarea);
        const datos:boolean=await deleteTags({idTag:idTag,idTarea:idTarea})

        res.status(200).json({ status: 200,data:datos , message:datos? 'Se borro el tag de la tarea':'no se borro ningun tag' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al agregar el tag a la tarea' });
    }
})

router.post('/Tags', async(req, res)=>{
    try {
        const {idTag, idTarea}=req.body;
        const data:number=await addTags({idTag:idTag,idTarea:idTarea})
        res.status(200).json({ status: 200, message: `se agrego ${data} tag a la tarea` });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al agregar el tag a la tarea' });
    }
})

router.get('/:id', async(req, res)=>{
    try {
        console.log(req.params.id)
        const tarea= await getTaskDetails(+req.params.id)
        console.log(tarea)
        res.status(200).json({ status: 200, tarea: tarea, message: 'Detalles de la tarea!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al Detalar la tarea' });
    }
})

router.put('/:id',taskValidation, checkResult, async(req, res)=>{
    try {
        console.log(req.body,req.params.id)
        const tarea= await updateTask({
            tarea:req.body,
            id:+req.params.id
        });
        console.log('hola');
        console.log(tarea)
        res.status(200).json({ status: 200, tarea: tarea, message: 'Tarea actualizada!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al actualizar la tarea' });
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const tareaBorrada:boolean=await deleteTask(+req.params.id);
        res.status(200).json({ status: 200, tarea: tareaBorrada, message: tareaBorrada? 'Tarea borrada!' :'No se ha borrado ninguna tarea'});
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al borrar la tarea' });
    }
})

router.put('/pinear/:id', async(req, res)=>{
    try {
        const tarea= await setPinear(+req.params.id);
        res.status(200).json({ status: 200, tarea: tarea, message: 'Tarea actualizada!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al actualizar la tarea' });
    }
})

router.put('/completar/:id', async(req, res)=>{
    try {
        const tarea= await setCompletada(+req.params.id);
        res.status(200).json({ status: 200, tarea: tarea, message: 'Tarea actualizada!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al actualizar la tarea' });
    }
})

router.get('/search/:titulo', async(req, res)=>{
    try {
        const tareas:tarea[]=await searchTask({titulo:req.params.titulo, correo:req.body.correo});
        console.log(tareas)
        res.status(200).json({ status: 200, tareas: tareas, message: 'Tareas encontradas!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar la tarea' });
    }
})

export default router;