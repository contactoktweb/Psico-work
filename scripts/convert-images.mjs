import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const extensions = ['.png', '.jpg', '.jpeg'];

async function convertImages() {
    if (!fs.existsSync(imagesDir)) {
        console.log('Images directory not found');
        return;
    }

    const files = fs.readdirSync(imagesDir);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (extensions.includes(ext)) {
            const inputPath = path.join(imagesDir, file);
            const outputFilename = path.basename(file, ext) + '.webp';
            const outputPath = path.join(imagesDir, outputFilename);

            if (fs.existsSync(outputPath)) {
                console.log(`Skipping ${file}, ${outputFilename} already exists.`);
                continue;
            }

            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`Converted ${file} to ${outputFilename}`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

convertImages();
