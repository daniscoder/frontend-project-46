import parseData from './parsers.js';
import compare from './compare.js';
import { readTextFile, getFilePathExtension } from './helpers.js';
import formater from './formaters/index.js';

export default (filePath1, filePath2, format = 'stylish') => {
  const parseFiles = [filePath1, filePath2]
    .map((filePath) => parseData(readTextFile(filePath), getFilePathExtension(filePath)));
  return formater(compare(...parseFiles), format);
};
