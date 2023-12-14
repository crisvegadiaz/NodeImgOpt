import fse from "fs-extra";
import sharp from "sharp";
import imagemin from "imagemin";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminGifsicle from "imagemin-gifsicle";

let targetWidth = 1920;
let inputFolder = "./src/img";
let outputFolder = "./src/opt";

const processImg = async () => {
  try {
    const files = await fse.readdir(inputFolder);

    for (const file of files) {
      let inputPath = `${inputFolder}/${file}`;
      let outputPath = `${outputFolder}/${file}`;

      await sharp(inputPath).resize(targetWidth).toFile(outputPath);

      await imagemin([outputPath], {
        destination: outputFolder,
        plugins: [
          imageminSvgo(), // Comprimir imagen SVG
          imageminWebp({ quality: 80 }), // Comprimir imagen WebP con calidad del 80%
          imageminGifsicle(), // Comprimir imagen GIF
          imageminPngquant(), // Comprimir imagen PNG
          imageminJpegtran({ quality: 80 }), // Comprimir imagen JPG con calidad del 80%
        ],
      });

      console.log(`📁 Se ha optimizado la imagen: ${file}`);
    }

    console.log("📷 Se ha terminado la optimización de todas tus imágenes 🎉");
  } catch (err) {
    console.error("❌ Error de aplicaicion: " + err);
  }
};

processImg();
