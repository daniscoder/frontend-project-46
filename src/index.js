import { readTextFile, getPathExtension, outFormat } from './helpers.js';
import formater from './formaters/index.js';
import parsers from './parsers.js';
import makeDiff from './makeDiff.js';

export default (filePath1, filePath2, format = outFormat.stylish) => {
  const diffTree = makeDiff(...[filePath1, filePath2]
    .map((filePath) => parsers(readTextFile(filePath), getPathExtension(filePath))));
  return formater(diffTree, format);
};
