import { Router } from 'express';
import { isAuth } from '@validations/auth';
import {getCantTaskComplete,getCantTaskCompleteByTypeFilter,getCantTaskCompleteFilter} from '@helpers/statistics';
import { estadisticas } from '@interfaces/estadisticas';

const router = Router();

router.get('/filtrar/:correo', async(req, res)=>{
    try {
        const {tipo} = req.body;
        const estadistica:number=await getCantTaskCompleteFilter({correo:req.params.correo, tipo:tipo});
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
})

router.get('/type/:correo', async(req, res)=>{
    try {
        const {tipo, filtrado} = req.body;
        const estadistica:estadisticas=await getCantTaskCompleteByTypeFilter({
            correo:req.params.correo,
            tipo:tipo,
            filtrado:filtrado
        })
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
})


router.get('/:correo', async(req,res)=>{
    try {
        console.log(req.params.correo)
        const estadistica:estadisticas=await getCantTaskComplete(req.params.correo)
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
})

export default router;