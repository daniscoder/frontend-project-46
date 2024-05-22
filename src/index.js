import path from 'path';
import fs from 'fs';
import parseData from './parsers.js';
import compare from './compare.js';

const getFilePathExtension = (filePath) => {
  const extname = path.extname(filePath);
  return extname !== '' ? extname.split('.')[1] : '';
};

const buildFullPath = (filePath) => path.resolve(process.cwd(), filePath);

const readTextFile = (filePath) => fs.readFileSync(buildFullPath(filePath)).toString();

export default (...filePaths) => {
  const parseFiles = filePaths
    .map((filePath) => parseData(readTextFile(filePath), getFilePathExtension(filePath)));
  return compare(...parseFiles);
};
