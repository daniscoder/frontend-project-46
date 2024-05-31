import path from 'path';
import fs from 'fs';

const nodeState = {
  nested: 'nested',
  updated: ' ',
  removed: '-',
  added: '+',
};

const formats = {
  stylish: 'stylish',
  plain: 'plain',
};

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

const getNode = (state, key, data) => ({ state, key, data });

export {
  nodeState, formats, getPathExtension, buildFullPath, readFile, getNode,
};
