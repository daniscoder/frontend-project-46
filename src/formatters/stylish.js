import { statuses, statusChars, getNode } from '../helpers.js';

const baseWith = 4;

const tabChar = ' ';
const getIndent = (depth) => tabChar.repeat(depth * baseWith);
const getKeyIndent = (depth, key, sign) => `${getIndent(depth)}${tabChar.repeat(2)}${sign} ${key}: `;

const stylish = (tree) => {
  console.log(JSON.stringify(tree, null, 2));
  const iter = (node, depth) => {
    const result = node.map(({ state, key, value, updValue }) => {
      if (state === statuses.nested) {
        return `${getKeyIndent(depth, key, statusChars[state])}${iter(value, depth + 1)}`;
      }
      if (value instanceof Object) {
        const arr = Object.entries(value)
          .flatMap(([nodeKey, nodeValue]) => getNode(statuses.object, nodeKey, nodeValue));
        return `${getKeyIndent(depth, key, statusChars[state])}${iter(arr, depth + 1)}`;
      }
      return `${getKeyIndent(depth, key, statusChars[state])}${value}`;
    });
    return `{\n${result.join('\n')}\n${getIndent(depth)}}`;
  };
  return iter(tree, 0);
};

export default stylish;
