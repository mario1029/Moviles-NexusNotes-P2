import { estadisticas } from '@interfaces/estadisticas';
export declare const getCantTaskComplete: (correo: string) => Promise<estadisticas>;
export declare const getCantTaskCompleteFilter: ({ correo, tipo }: {
    correo: string;
    tipo: number;
}) => Promise<number>;
export declare const getCantTaskCompleteByTypeFilter: ({ correo, tipo, filtrado }: {
    correo: string;
    tipo: number;
    filtrado: number;
}) => Promise<estadisticas>;
//# sourceMappingURL=statistics.d.ts.map