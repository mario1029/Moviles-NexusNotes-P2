import { Router } from 'express';
import {insertArchivos, getArchivos, deleteArchivos} from '@helpers/files';
import { archivo } from '@interfaces/archivo';
import { taskValidation, checkResult } from '@validations/fields';

const router = Router();

router.get('/:idTarea',async(req, res)=>{
    try {
        const archivo:archivo[]= await getArchivos(+req.params.idTarea);
        console.log(archivo)
        res.status(200).json({ status: 200, archivos: archivo, message: 'Archivos encontrados!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar los archivo' });
    }
})

router.post('/:idTarea',async(req, res)=>{
    try {
        const archivo:archivo[]= await insertArchivos({
            archivo:req.body,
            id_tarea:+req.params.idTarea
        });
        res.status(200).json({ status: 200, archivos: archivo, message: 'Archivos encontrados!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar los archivo' });
    }
})

router.delete('/:idArchivo',async(req, res)=>{
    try {
        const archivo:boolean= await deleteArchivos(+req.params.idArchivo);
        res.status(200).json({ status: 200, archivos: archivo, message: 'Archivos encontrados!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al encontrar los archivo' });
    }
})

export default router;