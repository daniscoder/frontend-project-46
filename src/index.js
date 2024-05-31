import { readFile, getPathExtension, formats } from './helpers.js';
import formater from './formatters/index.js';
import parser from './parsers.js';
import makeDiff from './makeDiff.js';

export default (filePath1, filePath2, formatName = formats.stylish) => {
  const diffTree = makeDiff(...[filePath1, filePath2]
    .map((filePath) => {
      const file = readFile(filePath);
      const extension = getPathExtension(filePath);
      return parser(file, extension);
    }));
  return formater(diffTree, formatName);
};
