import { Router } from 'express';
import { isAuth } from '@validations/auth';
import {getCantTaskComplete,getCantTaskCompleteByTypeFilter,getCantTaskCompleteFilter} from '@helpers/statistics';
import { estadisticas } from '@interfaces/estadisticas';

const router = Router();

router.get('/filtrar/:tipo', async(req:any, res)=>{
    try {
        const {tipo} = req.params;
        const estadistica:number=await getCantTaskCompleteFilter({correo:req.user.correo, tipo:tipo});
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
})

router.get('/type/', async(req:any, res)=>{
    try {
        const {tipo, filtrado} = req.body;
        const estadistica:estadisticas=await getCantTaskCompleteByTypeFilter({
            correo:req.user.correo,
            tipo:tipo,
            filtrado:filtrado
        })
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
})


router.get('/', async(req:any,res)=>{
    try {
        console.log(req.user.correo)
        const estadistica:estadisticas=await getCantTaskComplete(req.user.correo)
        res.status(200).json({ status: 200, estadisticas: estadistica, message: 'Estadisticas calculadas!' });
    } catch (e) {
        res.status(500).json({ status: 500, error: e, message: 'Error al calcular la estadisticas' });
    }
})

export default router;