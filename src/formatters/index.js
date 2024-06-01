import formaterStylish from './stylish.js';
import formaterPlain from './plain.js';

const formatters = {
  stylish: formaterStylish,
  plain: formaterPlain,
};

export default (obj, formatName) => {
  if (formatName in formatters) {
    return formatters[formatName](obj, formatName);
  }
  throw new Error('Unknown format');
};
