export interface Usuario {
  nombre?: string;
  correo: string;
}

export interface UsuarioCompleto extends Usuario {
  contrasenia?: string;
}
