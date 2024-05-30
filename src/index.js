import { readTextFile, getPathExtension, formatNames } from './helpers.js';
import formater from './formatters/index.js';
import parsers from './parsers.js';
import makeDiff from './makeDiff.js';

export default (filePath1, filePath2, formatName = formatNames.stylish) => {
  const diffTree = makeDiff(...[filePath1, filePath2]
    .map((filePath) => {
      const textFile = readTextFile(filePath);
      const extension = getPathExtension(filePath);
      return parsers(textFile, extension);
    }));
  return formater(diffTree, formatName);
};
