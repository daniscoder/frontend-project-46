import { nodeState, getNode } from '../helpers.js';

const baseWith = 4;

const tabChar = ' ';
const getIndent = (depth) => tabChar.repeat(depth * baseWith);
const getKeyIndent = (depth, key, sign = tabChar) => `${getIndent(depth)}  ${sign} ${key}: `;

const stylish = (tree) => {
  const iter = (node, depth) => {
    const result = node.map(({ state, key, data }) => {
      if (state === nodeState.nested) {
        return `${getKeyIndent(depth, key)}${iter(data, depth + 1)}`;
      }
      if (data instanceof Object) {
        const arr = Object.entries(data)
          .flatMap(([nodeKey, value]) => getNode(tabChar, nodeKey, value));
        return `${getKeyIndent(depth, key, state)}${iter(arr, depth + 1)}`;
      }
      return `${getKeyIndent(depth, key, state)}${data}`;
    });
    return `{\n${result.join('\n')}\n${getIndent(depth)}}`;
  };
  return iter(tree, 0);
};

export default stylish;
