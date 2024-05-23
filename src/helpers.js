import path from 'path';
import fs from 'fs';

const fixturesPath = '__fixtures__';

const getFilePathExtension = (filePath) => {
  const extname = path.extname(filePath);
  return extname !== '' ? extname.split('.').at(-1) : '';
};

const buildFullPath = (filePath) => {
  if (path.isAbsolute(filePath)) {
    return filePath;
  }
  return path.resolve(process.cwd(), fixturesPath, path.basename(filePath));
};

const readTextFile = (filePath) => fs.readFileSync(buildFullPath(filePath)).toString();

export { getFilePathExtension, readTextFile };
