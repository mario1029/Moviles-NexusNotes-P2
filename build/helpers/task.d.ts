import { tareaDetallada, tarea } from '@interfaces/tarea';
export declare const insertTask: ({ tarea, correo }: {
    tarea: tareaDetallada;
    correo: string;
}) => Promise<tareaDetallada>;
export declare const getTask: (correo: string) => Promise<tarea[]>;
export declare const getTaskDetails: (id: number) => Promise<tareaDetallada>;
export declare const updateTask: ({ tarea, id }: {
    tarea: tareaDetallada;
    id: number;
}) => Promise<tarea>;
export declare const setPinear: (id: number) => Promise<tarea>;
export declare const setCompletada: (id: number) => Promise<tarea>;
export declare const searchTask: ({ titulo, correo }: {
    titulo: string;
    correo: string;
}) => Promise<tarea[]>;
export declare const addTags: ({ idTag, idTarea }: {
    idTag: number;
    idTarea: number;
}) => Promise<number>;
export declare const deleteTask: (id: number) => Promise<boolean>;
export declare const deleteTags: ({ idTag, idTarea }: {
    idTag: number;
    idTarea: number;
}) => Promise<boolean>;
//# sourceMappingURL=task.d.ts.map