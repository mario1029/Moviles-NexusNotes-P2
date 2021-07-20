import Pool from '@utils/pool';
import { queries } from '@utils/queries';
import { compare, genSaltSync, hashSync } from 'bcryptjs';
import { Usuario, UsuarioCompleto } from '@interfaces/usuario';

const pool = Pool.getInstance();

export const signUpUser = async function (body:UsuarioCompleto) {
  const client = await pool.connect();
  const { nombre, correo, contrasenia } = body;
  try {
    await client.query('BEGIN');
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(contrasenia, salt);
    const response = (await client.query(queries.SIGN_UP_USER, [correo,nombre, hashedPassword])).rows[0];
    const user: UsuarioCompleto = {
      nombre: response.nombre,
      correo: response.correo,
      contrasenia: response.contrasenia,
    };
    await client.query('COMMIT');
    return user;
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
};

export const comparePassword = (candidate, hash) => {
  return new Promise((res, rej) => {
    compare(candidate, hash, (err, isMatch) => {
      if (err) rej(err);
      res(isMatch);
    });
  });
};

export const getUserByEmail = async (correo: string): Promise<UsuarioCompleto> => {
  const client = await pool.connect();

  try {
    const response = (await client.query(queries.GET_USER_BY_EMAIL, [correo])).rows;
    const users: UsuarioCompleto[] = response.map((row) => {
      return {
        nombre: row.nombre,
        correo: row.correo,
        contrasenia: row.contrasenia
      };
    });

    return users[0];
  } catch (e) {
    throw e;
  } finally {
    client.release();
  }
};
