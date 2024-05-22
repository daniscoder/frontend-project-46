import path from 'path';
import fs from 'fs';
import parseData from './tools/parser.js';
import compare from './tools/compare.js'

const getFilePathExtension = (filePath) => {
  const extname = path.extname(filePath);
  return extname !== '' ? extname.split('.')[1] : '';
};

const resolvedFilePath = (filePath) => path.resolve(process.cwd(), filePath);

const readTextFile = (filePath) => {
  const file = fs.readFileSync(resolvedFilePath(filePath));
  return file.toString();
};

export default (...filePaths) => {
  const parseFiles = filePaths.map((filePath) => {
    const textFile = readTextFile(filePath);
    const extension = getFilePathExtension(filePath);
    return parseData(textFile, extension);
  });
  return compare(...parseFiles);
};
