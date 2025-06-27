# Trabajo Integrador Grupo 17 Programación Visual 2025

## Descripción

Esta es una aplicación de una sola página (SPA) desarrollada en React utilizando Vite. Permite gestionar productos mediante funcionalidades como crear, editar, eliminar y visualizar información detallada.

## Características

- **Página de Inicio**
   - Muestra un listado de productos en formato de tarjetas, incluyendo:

- **Funcionalidad de Favoritos**
   - Los productos pueden ser marcados o desmarcados como favoritos.
   - El estado de los productos favoritos se almacena en un estado global.

- **Página de Favoritos**
   - Muestra solo los productos marcados como favoritos.

- **Página de Detalle del Producto**: 
   - Información ampliada del producto.
   - Opción para desmarcar el producto como favorito.

- **Formulario de Creación y Edición**: 
   - Permite crear nuevos productos o editar productos existentes.

## Tecnologías Utilizadas

- React
- Vite
- React Router Dom
- Redux
- Axios
- CSS Framework Bootstrap

## API Utilizada

La aplicación consume productos desde la siguiente API REST externa:

- [Fake Store API](https://fakestoreapi.com/products)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Franco46-ochoa/pv_tp_integrador_grupo17
   cd pv_tp_integrador_grupo17

   
2. Instala las dependencias:
    ```bash
    npm install
    npm install redux react-redux axios
    
3. Ejecutar la aplicación
    ```bash
    npm run dev
    
La app estará disponible en http://localhost:5173 (o el puerto que indique Vite).

## Estructura del proyecto
```
├── public/
│ ├── vite.svg
├── src/
│ ├── assets/
│ │ └── react.svg
│ ├── components/
│ │ ├── Acerca.jsx
│ │ ├── Favoritos.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Home.jsx
│ │ ├── NavBar.jsx
│ │ ├── ProductoCard.jsx
│ │ ├── ProductoDetalle.jsx
│ │ ├── ProductoForm.jsx
│ │ └── ProductoList.jsx
│ ├── Styles/
│ │ ├── Cards.css
│ │ ├── DetalleProducto.css
│ │ ├── Header.css
│ │ ├── NavBar.css
│ │ └── Styles.css
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ ├── main.jsx
│ ├── ProductosSlice.jsx
│ └── store.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── package-lock.json
├── package.json
└── vite.config.js
```

## Integrantes del Grupo

- Taritolay Gonzalo - [GitHub](https://github.com/GonzaTaritolay)
- Antivilo Aldo Dante - [GitHub](https://github.com/AldoDante)
- Ochoa Franco - [GitHub](https://github.com/Franco46-ochoa)
- Ortiz Marcelo Fernando - [GitHub](https://github.com/marceortiz)
