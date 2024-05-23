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
  const resolvedFilePath = path.resolve(process.cwd(), filePath);
  if (fs.existsSync(resolvedFilePath)) {
    return resolvedFilePath;
  }
  const resolvedFixtureFilePath = path.resolve(process.cwd(), fixturesPath, filePath);
  if (fs.existsSync(resolvedFixtureFilePath)) {
    return resolvedFixtureFilePath;
  }
  return resolvedFilePath;
};

const readTextFile = (filePath) => fs.readFileSync(buildFullPath(filePath)).toString();

export { getFilePathExtension, readTextFile };
