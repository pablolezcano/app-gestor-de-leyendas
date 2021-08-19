# Gestor de Leyendas

Con este repositorio podes guardar textos en una base de datos embebida para imprimirlos en una parte especifica de una hoja.


>*NOTA*: La version del release v1.0 esta optimizada para que pueda funcionar de manera óptima en Windows 7, en mi  [**blog**](https://pablolezcano.com.ar/blog)
 explico con detalles el porqué del mismo. 

# Requisitos

| Dependencias | Versión | Repo |
|---|---|---|
|NodeJS | v14.15.3. | |
| Framework Electron | 8.2.0 | https://github.com/electron/electron |
| electron-packager | 15.2.0 | https://github.com/electron/electron-packager |
| nedb | 1.8.0 | https://github.com/louischatriot/nedb|


Una vez instaladas las dependencias, podemos abrir el repo 

# Levantar la app.

En la consola ponemos  ``npm start`` para iniciar el programa.

# Configurar el lugar del texto

Para colocar el texto en el lugar deseado nos dirigimos a  **/ccs/media-print.css** .

Modificamos el tamaño de la hoja

```
@media print {
  @page {
    size: A4 portrait; 
  }
```
Y la posición.
```
  #media-print {
    width: 650px;
    height: 57px;
    padding: 3px;
    position: absolute;
    bottom: 85px;
    left: 32px;
    background-color: #000;
    border: 1px;
    }
    #media-print > p {
      font-family: Arial;
      font-weight: bold;
      word-break:normal;
      text-align: justify;
      font-size: 10pt;
    }
```

# Compilación.

Para compilar la aplicación en la terminal agregamos la siguiente linea de código.

Windows:  ``npm run package-win``

Linux : `` npm run package-linux ``

La aplicación se guardara en la carpeta `` release-builds/ ``






