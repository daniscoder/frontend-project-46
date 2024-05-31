import stylish from './stylish.js';
import plain from './plain.js';
import { formats } from '../helpers.js';

export default (obj, formatName) => {
  switch (formatName) {
    case formats.stylish: {
      return stylish(obj);
    }
    case formats.plain: {
      return plain(obj);
    }
    default:
      throw new Error('Unknown formater');
  }
};
