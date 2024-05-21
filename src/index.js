import path from 'path';
import fs from 'fs';
import parseData from './tools/parser.js';

const fixturesDir = '__fixtures__';

const getFilePathExtension = (filePath) => {
  const extname = path.extname(filePath);
  return extname !== '' ? extname.split('.')[1] : '';
};

const getFilePath = (fileName) => path.resolve(process.cwd(), fileName);

const readTextFile = (fileName) => {
  const file = fs.readFileSync(getFilePath(fileName));
  return file.toString();
};

export default (fileName1, fileName2) => {
  const q = parseData(readTextFile(fileName1), getFilePathExtension(fileName1));
  return q;
};
