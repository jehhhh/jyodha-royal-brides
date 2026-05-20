import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.match(/\.(jsx?|tsx?|json|css|md)$/i)) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const updateReferences = () => {
  const dir = path.join(process.cwd(), 'src');
  const files = walkSync(dir);

  let updatedCount = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let originalLength = content.length;

    // Specifically handle the old logo reference to the new one
    content = content.replace(/\/assets\/logo\/logo-full\.png/g, '/assets/logo/logo-jyodha.webp');
    content = content.replace(/\/assets\/logo\/logo.*\.png/g, '/assets/logo/logo-jyodha.webp');
    content = content.replace(/logo-jyodha\.pngLogo\.png/g, 'logo-jyodha.webp');

    // Handle generic image extension replacements: .jpg, .jpeg, .png -> .webp
    // Be careful with false positives, match only .jpg, .jpeg, .png followed by quotes or other delimiters
    content = content.replace(/\.jpg(['"`\s)|])/gi, '.webp$1');
    content = content.replace(/\.jpeg(['"`\s)|])/gi, '.webp$1');
    content = content.replace(/\.png(['"`\s)|])/gi, '.webp$1');

    if (content !== fs.readFileSync(file, 'utf8')) {
      fs.writeFileSync(file, content, 'utf8');
      updatedCount++;
      console.log(`Updated ${path.relative(process.cwd(), file)}`);
    }
  }

  console.log(`Updated ${updatedCount} files.`);
};

updateReferences();
