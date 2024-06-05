import { states } from '../helpers.js';

const formatedValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (value instanceof Object) {
    return '[complex value]';
  }
  return value;
};

export default (tree) => {
  const iter = (node, path) => {
    const result = node
      .filter((obj) => obj.state !== states.unchanged)
      .map(({ state, key, value }) => {
        if (state === states.nested) {
          return iter(value, [...path, key]);
        }
        let text = `Property '${[...path, key].join('.')}' was ${state}`;
        if (state === states.added) {
          text += ` with value: ${formatedValue(value)}`;
        }
        if (state === states.updated) {
          text += `. From ${formatedValue(value[0])} to ${formatedValue(value[1])}`;
        }
        return text;
      });
    return result.join('\n');
  };
  return iter(tree, []);
};
