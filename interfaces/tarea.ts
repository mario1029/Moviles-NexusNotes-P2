export interface tarea{
    titulo:string,
    fechaVencimiento: string,
    posicion:number,
    pinear:boolean,
    completada:boolean
}

export interface tareaDetallada extends tarea{
    titulo:string,
    contenido: string,
    fechaVencimiento: string,
    horaVencimiento: string,
    fechaNotificacion:string,
    horaNotificacion:string,
    posicion:number,
    tipo:number,
    tags:string[]
}