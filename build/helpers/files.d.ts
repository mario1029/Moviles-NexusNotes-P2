import { archivo } from '@interfaces/archivo';
export declare const getArchivos: (id_tarea: number) => Promise<archivo[]>;
export declare const insertArchivos: ({ archivo, id_tarea }: {
    archivo: archivo;
    id_tarea: number;
}) => Promise<archivo[]>;
export declare const deleteArchivos: (id_archivo: number) => Promise<boolean>;
//# sourceMappingURL=files.d.ts.map