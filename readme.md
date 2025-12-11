### Proyecto Backend UTN:
Este proyecto es una API REST desarrollada en Node.js, Express y TypeScript, conectada a una base de datos MongoDB. Permite gestionar un catálogo de libros (CRUD), y implementa de autenticación de usuarios.

### Instrucciones de uso
1. En una carpeta, en la terminal de git poner el comando: 
        -git clone https://github.com/Fede-Giithub/ProyectoFinalBackEnd

2. Una vez abierto el proyecto, poenr en la terminal el comando:
        -npm install

3. Crear un archivo .env. Ejemplo:
    PORT=3000
    JWT_SECRET=clave1234
    URI_DB=mongodb://localhost:27017/bdProyectoBackEnd
    EMAIL_USER=miemail@gmail.com
    EMAIL_PASS=abcd1234efgh5678

4. Para ejecutar el programa, poner en la terminal el comando:
        Modo desarrollo:
            -npm run dev
        Build de producción:
            -npm run build
        Ejecutar producción:
            -npm start





### Endpoints
1. Register
        URL: http://localhost:3000/auth/register
        Método: POST
        Descripción: Registra un usuario nuevo.

2. Login
        URL: http://localhost:3000/auth/login
        Método: POST
        Descripción: Inicia sesión y devuelve un token JWT.

3. Obtener todos los libros
        URL: http://localhost:3000/books
        Método: GET
        Descripción: Obtiene todos los libros(permite filtrar).

4. Obtener libro por ID
        URL: http://localhost:3000/books/:id
        Método: GET
        Descripción: Obtiene un libro específico por su ID.

5. Crear libro
        URL: http://localhost:3000/books
        Método: POST
        Autenticación: Requiere token JWT
        Descripción: Crea un libro nuevo. Permite subir imagen con Multer.

6. Actualizar libro por ID
        URL: http://localhost:3000/books/:id
        Método: PATCH
        Autenticación: Requiere token JWT
        Descripción: Actualiza uno o varios campos de un libro.

7. Eliminar libro por ID
        URL: http://localhost:3000/books/:id
        Método: DELETE
        Autenticación: Requiere token JWT
        Descripción: Elimina un libro existente por su ID.

