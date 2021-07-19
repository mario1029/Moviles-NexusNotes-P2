import { tarea, tareaDetallada } from "../interfaces/tarea";

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

export const completeTask= async(id:number)=>{
    const response= await fetch(`https://registroweb2.herokuapp.com/task/completar/${id}`,
    {
        method: 'PUT'
    });
    const data= await response.json();
    const tareas:tarea=data.tarea;
    console.log(data);
    return tareas;
}

export const deleteTask= async(id:number)=>{
    const response= await fetch(`https://registroweb2.herokuapp.com/task/${id}`,
    {
        method: 'DELETE'
    });
    const data= await response.json();
    const tareas:tarea=data.tarea;
    console.log(data);
    return tareas;
}

export const pinnearTask= async(id:number)=>{
    const response= await fetch(`https://registroweb2.herokuapp.com/task/pinear/${id}`,
    {
        method: 'PUT'
    });
    const data= await response.json();
    const tareas:tarea=data.tarea;
    console.log(data);
    return tareas;
}

export const searchtTask= async(titulo:string)=>{
    const response= await fetch(`https://registroweb2.herokuapp.com/task/search/${titulo}`,
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo: 'jose'})
    });
    const data= await response.json();
    const tareas:tarea[]=data.tareas;
    console.log(data);
    return tareas;
}

export const createTask= async(tarea:tareaDetallada)=>{
    console.log("algoooooooooooooooooooooo")
    const response= await fetch(`https://registroweb2.herokuapp.com/task/news/jose`,
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tarea)
    });
    const data= await response.json();
    const tareas:tareaDetallada=data.tarea;
    console.log(tareas);
    return data;
}