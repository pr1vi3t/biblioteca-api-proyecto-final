CREATE DATABASE bd_biblioteca_grupo5;

USE bd_biblioteca_grupo5;

-- Tabla Rol
CREATE TABLE rol (
  id_rol INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Lector
CREATE TABLE lector (
  id_lector INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(100) NOT NULL,
  apellido_paterno VARCHAR(50) NOT NULL,
  apellido_materno VARCHAR(50) NOT NULL,
  correo VARCHAR(50),
  celular VARCHAR(9),
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Usuario
CREATE TABLE usuario (
  id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(100) NOT NULL,
  apellido_paterno VARCHAR(50) NOT NULL,
  apellido_materno VARCHAR(50) NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  correo VARCHAR(50),
  celular VARCHAR(9),
  id_rol INT NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

-- Tabla Estado_Prestamo
CREATE TABLE estado_prestamo (
  id_estado_prestamo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Editorial
CREATE TABLE editorial (
  id_editorial INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  pais_origen VARCHAR(20),
  representante VARCHAR(100),
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Autor
CREATE TABLE autor (
  id_autor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(100) NOT NULL,
  apellido_paterno VARCHAR(50) NOT NULL,
  apellido_materno VARCHAR(50) NOT NULL,
  fecha_nacimiento DATE,
  nacionalidad VARCHAR(50),
  correo_electronico VARCHAR(50),
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Categoria
CREATE TABLE categoria (
  id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(100) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Libro
CREATE TABLE libro (
  id_libro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  isbn VARCHAR(50) NOT NULL,
  titulo VARCHAR(200) NOT NULL,
  imagen_url VARCHAR(500),
  edicion VARCHAR(50),
  paginas INT,
  id_editorial INT NOT NULL,
  id_autor INT NOT NULL,
  id_categoria INT NOT NULL,
  idioma VARCHAR(30),
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_editorial) REFERENCES editorial(id_editorial),
  FOREIGN KEY (id_autor) REFERENCES autor(id_autor),
  FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

-- Tabla Ejemplar
CREATE TABLE ejemplar (
  id_ejemplar INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_libro INT NOT NULL,
  numero INT NOT NULL,
  estado VARCHAR(50) NOT NULL,
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_libro) REFERENCES libro(id_libro)
);

-- Tabla Prestamo
CREATE TABLE prestamo (
  id_prestamo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_ejemplar INT NOT NULL,
  id_lector INT NOT NULL,
  id_usuario INT NOT NULL,
  id_estado_prestamo INT NOT NULL,
  fecha_prestamo DATE NOT NULL,
  fecha_devolucion DATE,
  fecha_confirmacion DATE,
  estado_entregado VARCHAR(100),
  estado_recibido VARCHAR(100),
  estado_auditoria INT NOT NULL DEFAULT 1,
  fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_ejemplar) REFERENCES ejemplar(id_ejemplar),
  FOREIGN KEY (id_lector) REFERENCES lector(id_lector),
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_estado_prestamo) REFERENCES estado_prestamo(id_estado_prestamo)
);
