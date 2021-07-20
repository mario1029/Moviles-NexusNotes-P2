export const queries = {
  GET_USERS: `SELECT * FROM usuario`,
  GET_USER_BY_EMAIL: `SELECT * FROM usuario WHERE correo = $1`,
  SIGN_UP_USER: `INSERT INTO usuario (correo, nombre, contrasenia) VALUES ($1, $2, $3) RETURNING *`,
  UPDATE_USER_BY_EMAIL: `UPDATE usuario SET nombre = $1, correo = $2  WHERE correo = $3 RETURNING *`,
  DELETE_USER_BY_EMAIL: `DELETE FROM usuario WHERE correo = $1`,
};

export const queriesTask={
  CREATE_TASK:`INSERT INTO tarea (titulo, contenido, fecha_vencimiento, hora_vencimiento, fecha_notificacion, hora_notificacion, id_tipo, correo) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
  GET_TASK:`SELECT id_tarea, titulo, fecha_vencimiento, posicion, pinear, completada FROM tarea WHERE correo LIKE $1 ORDER BY posicion`,
  GET_TASK_DETAIL:`SELECT * FROM tarea WHERE id_tarea = $1`,
  GET_TASK_BY_TITTLE:`SELECT * FROM tarea WHERE UPPER(titulo) like '%' || UPPER($1) || '%' AND correo LIKE $2`,
  UPDATE_TASK:`UPDATE tarea SET titulo=$1, contenido=$2, fecha_Vencimiento=$3, hora_Vencimiento=$4, fecha_Notificacion=$5, hora_Notificacion=$6, id_tipo=$7 WHERE id_tarea=$8 RETURNING *`,
  SET_PINEAR:`UPDATE tarea SET pinear = not pinear, completada= false WHERE id_tarea=$1 RETURNING *`,//PINEAR O DESPINEAR
  SET_COMPLETADA:`UPDATE tarea SET completada = not completada, pinear = false, fecha_completado=current_date WHERE id_tarea = $1 RETURNING *`,
  ADD_TAGS:`INSERT INTO tarea_tag (id_tag, id_tarea) VALUES ($1, $2) RETURNING *`,
  GET_TAGS:` SELECT nombre FROM tarea, tag, tarea_tag WHERE tarea_tag.id_tarea=tarea.id_tarea AND tarea_tag.id_tag= tag.id_tag AND tarea.id_tarea=$1`,
  DELETE_TASK:`DELETE FROM tarea WHERE id_tarea=$1`,
  DELETE_TAGS:`DELETE FROM tarea_tag WHERE id_tarea=$1 AND id_tag=$2`
}

export const queriesStatistics={
  GET_CANT_TASK_BY_TYPE:`SELECT COUNT(*) FROM tarea WHERE id_tipo=$1 AND correo LIKE $2`,
  GET_CANT_TASK_BY_TYPE_COMPLETE_DAILY:`SELECT COUNT(*) FROM tarea WHERE id_tipo=$1 AND correo LIKE $2 AND completada=true and fecha_completado=current_date`,
  GET_CANT_TASK_BY_TYPE_COMPLETE_MONTH:`SELECT COUNT(*) FROM tarea WHERE id_tipo=$1 AND correo LIKE $2 AND completada=true and extract(month from fecha_completado)=extract(month from current_date)`,  
  GET_CANT_TASK_COMPLETE_DAILY:`SELECT COUNT(*) FROM tarea WHERE correo LIKE $1 AND completada=true and fecha_completado=current_date`,
  GET_CANT_TASK_COMPLETE_MONTH:`SELECT COUNT(*) FROM tarea WHERE correo LIKE $1 AND completada=true and extract(month from fecha_completado)=extract(month from current_date)`,  
  GET_CANT_TASK_COMPLETE:`SELECT COUNT(*) FROM tarea WHERE correo LIKE $1 AND completada=true`,
  GET_CANT_TASK_BY_TYPE_COMPLETE:`SELECT COUNT(*) FROM tarea WHERE id_tipo=$1 AND correo LIKE $2 AND completada=true`,
  GET_CANT_TASK:`SELECT COUNT(*) FROM tarea WHERE correo LIKE $1`,  
}

export const querysImges={
  GET_IMAGE_TASK:`SELECT * FROM archivo WHERE id_tarea=$1`,
  INSERT_IMAGE_TASK:`INSERT INTO archivo (direccion, titulo, id_tarea) VALUES ($1, $2, $3) RETURNING *`,
  DELETE_IMAGE_TASK:`DELETE FROM archivo WHERE id_archivo=$1`
}