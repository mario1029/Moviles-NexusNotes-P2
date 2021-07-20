import {estadisticas} from '../interfaces/estadisticas'

export const estadisticasGenerales= async()=>{
    const response= await fetch(`https://registroweb2.herokuapp.com/statistics/`,
    {
        method: 'GET'
    });
    const data= await response.json();
    const estadistica:estadisticas=data.estadisticas;
    console.log(estadistica);
    return estadistica;
}

