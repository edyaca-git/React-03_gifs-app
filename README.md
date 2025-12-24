# React + TypeScript + Vite

Proyecto React buscar gifs
1.- comprobar version de node
    node --version
    v       20.19.4
2.- npm create vite
    o  Project name:
    |  03_gifs-app
    o  Select a framework:
    |  React
    o  Select a variant:
    |  TypeScript + SWC

    cd 03_gifs-app
    npm install
    npm run dev
3.- abrir el proyecto en vscode y eliminar :
        o  carpeta assets
        o  App.css
        o  App.tsx
    eliminar contenido de
        o  index.css
    quitar dependencias rotas de 
        o  main.tsx
4.- tareas
    o  agrego este css https://gist.github.com/Klerith/78df674c84d833d28d5c06359b04fc75
       al index.css
    o  instalo la font de https://fonts.google.com/specimen/Montserrat+Alternates
       1.- Get font
       2.- Get embed code 
           seleccionas las letras
             Light 300
             Regular 400
             Bold 700
        3.- copio el codigo generado de 
               Embed code in the <head> of your html
               y lo pego en el index.html
            copio el codigo generado de 
               Montserrat Alternates: CSS classes
               y lo pego en el index.css
5.- para consumir peticiones API instalamos AXIOS
    o  npm install axios

Temas puntuales
En esta sección comenzaremos a trabajar de una forma estructurada React, que nos permita escalar proyectos y empezar a dejar el pensamiento de que necesitamos la separación en componentes pequeños fáciles de reutilizar y probar.

Puntualmente veremos:
  o  Peticiones HTTP
  o  Debounce
  o  Manejo de estado
  o  Comunicación entre componentes
  o  useEffect
  o  Variables de entorno
  o  Fuentes personalizadas
  o  Entre otras cosas.
La idea principal es dejar las bases de cómo podemos trabajar aplicaciones en React que nos permitan crecer y reutilizar su contenido a futuro.

