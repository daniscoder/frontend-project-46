import stylish from './stylish.js';

export default (obj, format) => {
  switch (format) {
    case 'stylish': {
      return stylish(obj);
    }
    default:
      throw new Error('Unknown formatter');
  }
};
