import { UsuarioCompleto } from '@interfaces/usuario';
export declare const signUpUser: (body: UsuarioCompleto) => Promise<UsuarioCompleto>;
export declare const comparePassword: (candidate: any, hash: any) => Promise<unknown>;
export declare const getUserByEmail: (correo: string) => Promise<UsuarioCompleto>;
//# sourceMappingURL=session.d.ts.map