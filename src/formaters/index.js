import stylish from './stylish.js';
import { outFormat } from '../helpers.js';

export default (obj, format) => {
  switch (format) {
    case outFormat.stylish: {
      return stylish(obj);
    }
    default:
      throw new Error('Unknown formater');
  }
};
