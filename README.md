# Optimizador de Imágenes

Este script de Node.js está diseñado para optimizar imágenes en una carpeta específica. Utiliza diversas bibliotecas, como `sharp` para redimensionar imágenes y `imagemin` para comprimir imágenes en varios formatos.

## Requisitos

Asegúrate de tener Node.js instalado en tu sistema. Si no lo tienes, puedes descargarlo desde [la página oficial de Node.js](https://nodejs.org/).

## Instalación de Dependencias

Antes de ejecutar el script, asegúrate de instalar las dependencias necesarias ejecutando el siguiente comando en la terminal:

```bash
npm install
```

Este comando instalará las siguientes dependencias:

- `fs-extra`: Proporciona funciones adicionales para trabajar con el sistema de archivos.
- `sharp`: Biblioteca para el procesamiento de imágenes.
- `imagemin`: Utilidad para comprimir imágenes.
- `imagemin-svgo`: Plugin para la compresión de imágenes SVG.
- `imagemin-webp`: Plugin para la compresión de imágenes en formato WebP.
- `imagemin-jpegtran`: Plugin para la compresión de imágenes JPEG.
- `imagemin-pngquant`: Plugin para la compresión de imágenes PNG.
- `imagemin-gifsicle`: Plugin para la compresión de imágenes GIF.
- `readline-sync`: Biblioteca para la entrada de datos por consola de manera sincrónica.

## Uso

Para ejecutar el script, utiliza el siguiente comando en la terminal:

```bash
./nodeImg
```

## Uso recomendando

Para ejecutar el script, utiliza el siguiente comando en la terminal:

```bash
sudo npm link


```
Utiliza el script, utiliza el siguiente:

```bash
nodeImg
```

El script te pedirá el nombre de la carpeta que contiene las imágenes que deseas optimizar. Luego, procesará todas las imágenes en la carpeta, redimensionándolas y comprimiéndolas con diversas técnicas.

## Configuración

Puedes ajustar la configuración del script editando las variables en la parte superior del archivo:

- `targetWidth`: Ancho objetivo de las imágenes redimensionadas.
- `outputFolder`: Carpeta donde se guardarán las imágenes optimizadas.
- Plugins de `imagemin`: Puedes personalizar la configuración de cada plugin según tus necesidades.

Recuerda ejecutar el script siempre desde el directorio donde se encuentra utilizando la terminal.

¡Disfruta optimizando tus imágenes! 📷✨
