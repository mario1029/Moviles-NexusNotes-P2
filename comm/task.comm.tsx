import { tarea } from "../interfaces/tarea";

export const getListTask= async()=>{
    const response= await fetch('https://registroweb2.herokuapp.com/task/lista/jose',
    {
        method: 'GET'
    });
    const data= await response.json();
    const tareas:tarea[]=data.tareas;
    console.log(data);
    return tareas;
}