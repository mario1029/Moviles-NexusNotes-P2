import { createIconSetFromFontello } from "@expo/vector-icons";
import { tarea, tareaDetallada } from "../interfaces/tarea";

export const getListTask= async()=>{
    const response= await fetch('https://registroweb2.herokuapp.com/task/lista',
    {
        method: 'GET'
    });
    const data= await response.json();
    const tareas:tarea[]=data.tareas;
    
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
        }
    });
    const data= await response.json();
    const tareas:tarea[]=data.tareas;
    console.log(data);
    return tareas;
}

export const createTask= async(tarea:tareaDetallada)=>{
    console.log("algoooooooooooooooooooooo")
    const response= await fetch(`https://registroweb2.herokuapp.com/task/news/`,
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

export const detailTask=async(id:number)=>{
    const response= await fetch(`https://registroweb2.herokuapp.com/task/${id}`,
    {
        method: 'GET'
    });
    const data= await response.json();
    const tareas:tareaDetallada=data.tarea;
    console.log(tareas);
    return tareas;
}

export const editTask= async({tarea, id}:{tarea:tareaDetallada, id:number})=>{
    console.log(tarea, id)
    const response= await fetch(`https://registroweb2.herokuapp.com/task/${id}`,
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