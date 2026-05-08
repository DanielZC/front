# React + Vite

## Entorno de desarrollo
- Herramientas necesarias: **Node.js 22.18^**

## Pasos de instalación

> **Importante:** Para que el frontend funcione correctamente, deben estar activos simultáneamente los servicios de la API.

1. Clonar el repositorio: [`front`](https://github.com/DanielZC/front.git)
2. Copiar el archivo `.env.example` y cambiarle el nombre a `.env`, luego modificar el valor de la variable `VITE_API_URL`:
   - En local debe ser: `http://localhost:8000/api`
3. Estar dentro de la carpeta del proyecto y ejecutar `npm install`
4. Ejecutar `npm run dev` para iniciar el servicio del frontend
5. Para acceder, ingresar al enlace: `http://localhost:5173/`

## Pasos para despliegue (Vercel)

> **Importante:** Haber realizado los pasos de instalación antes de seguir el despliegue.

1. Estar dentro de la carpeta del proyecto y ejecutar `npm run build`
2. Subir el proyecto a GitHub
3. Tener una cuenta creada en [Vercel](https://vercel.com/) y vinculada con la cuenta de [GitHub](https://github.com)

### Configuración en Vercel

1. Crear un nuevo proyecto e importarlo desde GitHub
2. Seleccionar el proyecto a subir
3. Configurar las variables de entorno antes de hacer el deploy:
   - `VITE_API_URL=` debe apuntar a la URL donde está alojado el backend
   - Ejemplo: `https://www.mibackend.com/api`
4. Hacer clic en el botón **Deploy** y esperar a que finalice el proceso
