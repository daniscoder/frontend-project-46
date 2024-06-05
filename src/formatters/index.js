import formaterStylish from './stylish.js';
import formaterPlain from './plain.js';
import formaterJson from './json.js';

const formatters = {
  stylish: formaterStylish,
  plain: formaterPlain,
  json: formaterJson,
};

export default (obj, formatName) => {
  if (formatName in formatters) {
    return formatters[formatName](obj, formatName);
  }
  throw new Error('Unknown format');
};
