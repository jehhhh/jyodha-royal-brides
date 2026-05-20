import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DIRS_TO_SCAN = [
  path.join(process.cwd(), 'public', 'assets'),
  path.join(process.cwd(), 'src', 'assets'),
];

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const optimizeImages = async () => {
  let allFiles = [];
  DIRS_TO_SCAN.forEach(dir => {
    allFiles = allFiles.concat(walkSync(dir));
  });

  const imagesToConvert = allFiles.filter(f => /\.(png|jpe?g)$/i.test(f));
  
  console.log(`Found ${imagesToConvert.length} images to convert.`);

  for (const filePath of imagesToConvert) {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const basename = path.basename(filePath, ext);
    let newFilename = `${basename}.webp`;
    
    // Handle the specific logo renaming
    if (path.basename(filePath) === 'logo-jyodha.pngLogo.png' || basename.includes('logo-jyodha')) {
      newFilename = 'logo-jyodha.webp';
    }

    const newFilePath = path.join(dir, newFilename);
    const relativePath = path.relative(process.cwd(), filePath);
    
    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(newFilePath);
      
      console.log(`Converted: ${relativePath} -> ${newFilename}`);
      
      // Delete original file
      fs.unlinkSync(filePath);
    } catch (error) {
      console.error(`Error converting ${relativePath}:`, error);
    }
  }
  
  console.log('Done optimizing images.');
};

optimizeImages().catch(console.error);
