import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('public/favicon.svg');
const publicDir = path.resolve('public');

async function generateFavicons() {
  console.log('Generating favicons using sharp...');

  if (!fs.existsSync(svgPath)) {
    console.error(`Error: SVG file not found at ${svgPath}`);
    process.exit(1);
  }

  try {
    // 1. Generate Apple Touch Icon (180x180)
    await sharp(svgPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✔ Generated apple-touch-icon.png (180x180)');

    // 2. Generate Android Chrome Icons (192x192 & 512x512)
    await sharp(svgPath)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
    console.log('✔ Generated android-chrome-192x192.png');

    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
    console.log('✔ Generated android-chrome-512x512.png');

    // 3. Generate browser PNG icons (32x32 & 16x16)
    await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✔ Generated favicon-32x32.png');

    await sharp(svgPath)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✔ Generated favicon-16x16.png');

    // 4. Overwrite favicon.ico with a 32x32 png buffer
    const icoBuffer = await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toBuffer();
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
    console.log('✔ Generated favicon.ico (fallback 32x32)');

    console.log('Favicon generation completed successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
