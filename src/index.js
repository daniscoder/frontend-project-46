import parseData from './parsers.js';
import compare from './compare.js';
import { readTextFile, getFilePathExtension } from './helpers.js';

export default (...filePaths) => {
  const parseFiles = filePaths
    .map((filePath) => parseData(readTextFile(filePath), getFilePathExtension(filePath)));
  return compare(...parseFiles);
};
