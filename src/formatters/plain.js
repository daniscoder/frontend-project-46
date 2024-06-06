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
      .map(({
        state, key, children, value,
      }) => {
        if (state === states.nested) {
          return iter(children, [...path, key]);
        }
        const property = `Property '${[...path, key].join('.')}' was ${state}`;
        if (state === states.added) {
          return `${property} with value: ${formatedValue(value)}`;
        }
        if (state === states.updated) {
          return `${property}. From ${formatedValue(value[0])} to ${formatedValue(value[1])}`;
        }
        return property;
      });
    return result.join('\n');
  };
  return iter(tree, []);
};
