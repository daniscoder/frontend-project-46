import { readTextFile, getPathExtension } from './helpers.js';
import formater from './formaters/index.js';
import parsers from './parsers.js';
import makeDiff from './makeDiff.js';

export default (filePath1, filePath2, format) => {
  const parseFiles = [filePath1, filePath2]
    .map((filePath) => parsers(readTextFile(filePath), getPathExtension(filePath)));
  const diffTree = makeDiff(...parseFiles);
  return formater(diffTree, format);
};
