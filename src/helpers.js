import path from 'path';
import fs from 'fs';

const getPathExtension = (filePath) => {
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
  const resolvedFixtureFilePath = path.resolve(process.cwd(), '__fixtures__', filePath);
  if (fs.existsSync(resolvedFixtureFilePath)) {
    return resolvedFixtureFilePath;
  }
  return resolvedFilePath;
};

const readFile = (filePath) => fs.readFileSync(buildFullPath(filePath)).toString();

const states = {
  removed: 'removed',
  added: 'added',
  unchanged: 'unchanged',
  updated: 'updated',
  nested: 'nested',
};

export {
  states, getPathExtension, buildFullPath, readFile,
};
