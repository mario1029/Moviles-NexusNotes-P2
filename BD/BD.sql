CREATE TABLE "tarea" (
  "id_tarea" SERIAL PRIMARY KEY,
  "titulo" varchar NOT NULL,
  "contenido" text,
  "fecha_vencimiento" date,
  "hora_vencimiento" time,
  "fecha_notificacion" date,
  "hora_notificacion" time,
  "pinear" boolean DEFAULT false,
  "completada" boolean DEFAULT false,
  "fecha_completado" date,
  "posicion" integer,
  "id_tipo" integer,
  "correo" varchar
);

CREATE TABLE "archivo" (
  "id_archivo" SERIAL PRIMARY KEY,
  "direccion" varchar,
  "titulo" varchar,
  "id_tarea" integer
);

CREATE TABLE "tag" (
  "id_tag" SERIAL PRIMARY KEY,
  "nombre" varchar,
  "descripcion" varchar
);

CREATE TABLE "tarea_tag" (
  "id_tag" integer,
  "id_tarea" integer,
  PRIMARY KEY ("id_tag", "id_tarea")
);

CREATE TABLE "tipo" (
  "id_tipo" SERIAL PRIMARY KEY,
  "nombre" varchar,
  "descripcion" varchar
);

ALTER TABLE "tarea" ADD FOREIGN KEY ("id_tipo") REFERENCES "tipo" ("id_tipo") on delete set null on update cascade;

ALTER TABLE "tarea" ADD FOREIGN KEY ("correo") REFERENCES "usuario" ("correo") on delete cascade on update cascade;

ALTER TABLE "archivo" ADD FOREIGN KEY ("id_tarea") REFERENCES "tarea" ("id_tarea") on delete cascade on update cascade;

ALTER TABLE "tarea_tag" ADD FOREIGN KEY ("id_tag") REFERENCES "tag" ("id_tag") on delete cascade on update cascade;

ALTER TABLE "tarea_tag" ADD FOREIGN KEY ("id_tarea") REFERENCES "tarea" ("id_tarea") on delete cascade on update cascade;

--Triggers


CREATE OR REPLACE FUNCTION posicion() RETURNS TRIGGER AS $posicion$
   BEGIN
      UPDATE tarea SET posicion=(SELECT MAX(posicion) + 1 FROM tarea WHERE correo=new.correo) WHERE id_tarea=new.id_tarea;
      RETURN NEW;
   END;
$posicion$ LANGUAGE plpgsql;

CREATE TRIGGER insert_posicion AFTER INSERT ON tarea FOR EACH ROW EXECUTE PROCEDURE posicion();

-- INSERTAR ESTO PARA PODER PROBARLO BIEN

insert into tag (nombre, descripcion) values ('universidad', 'tag que hace referencias a notas para la universidad');
insert into tag (nombre, descripcion) values ('entretenimiento', 'tag que hace referencias a notas acerca de entretenimiento');

insert into tipo (nombre, descripcion) values ('clasico','nota de texto tipica');

-- INSERTAR UN USUARIO, SI NO MUCHAS COSAS NO FUNCIONARAN XD