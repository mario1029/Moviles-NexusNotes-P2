CREATE TABLE "usuario" (
  "correo" varchar PRIMARY KEY,
  "nombre" varchar NOT NULL,
  "contrasenia" varchar NOT NULL
);

CREATE TABLE "tarea" (
  "id_tarea" SERIAL PRIMARY KEY,
  "titulo" varchar NOT NULL,
  "contenido" text,
  "fechaVencimiento" date,
  "horaVencimiento" time,
  "fechaNotificacion" date,
  "horaNotificacion" time,
  "pinear" boolean DEFAULT false,
  "completada" boolean DEFAULT false,
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
