export interface tarea {
    id?: number;
    titulo: string;
    fechaVencimiento?: string;
    posicion: number;
    pinear?: boolean;
    completada?: boolean;
}
export interface tareaDetallada extends tarea {
    contenido: string;
    horaVencimiento?: string;
    fechaNotificacion?: string;
    horaNotificacion?: string;
    tipo: number;
    tags?: string[];
}
//# sourceMappingURL=tarea.d.ts.map