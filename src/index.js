import { readFile, getPathExtension } from './helpers.js';
import formater from './formatters/index.js';
import parser from './parsers.js';
import buildAST from './buildAST.js';

export default (filePath1, filePath2, formatName) => {
  const diffTree = buildAST(...[filePath1, filePath2]
    .map((filePath) => parser(readFile(filePath), getPathExtension(filePath))));
  return formater(diffTree, formatName);
};
