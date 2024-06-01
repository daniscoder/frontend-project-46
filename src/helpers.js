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
  nested: 'nested',
  unchanged: 'unchanged',
  changed: 'changed',
  removed: 'removed',
  added: 'added',
  object: 'object',
};

const chars = [' ', ' ', ' ', '-', '+', ' '];
const stateChars = Object.fromEntries(Object.keys(states).map((key, i) => [key, chars[i]]));

export {
  states, stateChars, getPathExtension, buildFullPath, readFile,
};
