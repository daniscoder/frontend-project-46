import { nodeState } from '../helpers.js';

const baseWith = 4;

const getSpace = (depth) => ' '.repeat(depth * baseWith);
const makeDepthKey = (depth, key, symbol = ' ') => `${getSpace(depth)}  ${symbol} ${key}:`;

const dataFormater = (data, depth) => {
  if (data instanceof Object) {
    const result = Object.entries(data)
      .map(([key, value]) => `${makeDepthKey(depth + 1, key)} ${dataFormater(value, depth + 1)}`);
    return `{\n${result.join('\n')}\n${getSpace(depth + 1)}}`;
  }
  return `${data}`;
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const result = node.map(({ state, key, data }) => {
      if (state === nodeState.nested) {
        return `${makeDepthKey(depth, key)} ${iter(data, depth + 1)}`;
      }
      return `${makeDepthKey(depth, key, state)} ${dataFormater(data, depth)}`;
    });
    return `{\n${result.join('\n')}\n${getSpace(depth)}}`;
  };
  return iter(tree, 0);
};

export default stylish;
