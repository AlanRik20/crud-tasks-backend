
# Trabajo de CRUD básico realizado con NODEJS

En este proyecto se realizaron las funciones de Crear, Leer, Modificar  y Eliminar.
El objetivo del trabajo fue el de refrescar conocimientos sobre estas operaciones en un entorno de Node.js

## DEPENDENCIAS UTILIZADAS:
  - __`Express`__.: utilizado para simplificar la creación y gestión del servidor web
  - __`Express-validator`__: dependencia utilizada para poder hacer las validaciones de los campos de manera más dinamica
  - __`mysql2`__: dependencia utilizada para poder conectarnos a una base de datos externa y poder realizar las consutlas
  
#### ENTORNO DE TRABAJO: 
- __`Node.js`__: Plataforma de ejecución para código JavaScript en el servidor
  
#### APLICACIONES UTILIZADAS:
  - __`Servidor de Base de Datos`__: XAMPP

  - __`Editor de codigo`__: Visual Studio Code

## Instalación y Configuración

1. __Clona el repositorio__
```
`git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio`
```
2. __Instala las dependencias__

```
$ npm i express mysql2 express-validator
```

3. __Configura la Base de Datos:__
- Crea una base de datos y una tabla en MySQL usando XAMPP.
- Ejemplo de SQL para crear una Base de Datos y tabla

```SQL
CREATE DATABASE tasks_db

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    isComplete BOOLEAN
);
```

## Uso
1. __Inicia el servidor__
```
npm run dev
````

2. __Endpoints disponibles__
### - __POST `/tasks`__: Crear una nueva tarea 

```
__Cuerpo de la Solicitud:__ {"title":"Título esperado","description":"Descripción"}
```
### - __GET `/tasks`__: Obtener todas las tareas

### - __GET `/task/:id`__: Obtener una tarea por su id

### - __PUT `/task/:id`__: Actualizar una tarea existente

### - __DELETE `/task/:id`__: Eliminar una tarea por su ID
