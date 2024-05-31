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

const statuses = {
  nested: 'nested',
  updated: 'updated',
  removed: 'removed',
  added: 'added',
  object: 'object',
};

const chars = [' ', ' ', ' ', '-', '+', ' '];
const statusChars = Object.fromEntries(Object.keys(statuses).map((key, i) => [key, chars[i]]));

const formats = {
  stylish: 'stylish',
  plain: 'plain',
};

const getNode = (state, key, data) => ({ state, key, data });

export {
  statuses, statusChars, formats, getPathExtension, buildFullPath, readFile, getNode,
};
