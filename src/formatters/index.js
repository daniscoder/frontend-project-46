import stylish from './stylish.js';
import plain from './plain.js';
import { formatNames } from '../helpers.js';

export default (obj, formatName) => {
  switch (formatName) {
    case formatNames.stylish: {
      return stylish(obj);
    }
    case formatNames.plain: {
      return plain(obj);
    }
    default:
      throw new Error('Unknown formater');
  }
};
