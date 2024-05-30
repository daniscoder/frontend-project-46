import { nodeState } from '../helpers.js';

const baseWith = 4;

const getSymbols = (depth) => ' '.repeat(depth * baseWith);
const makeKey = (depth, key, sign = nodeState.unsigned) => `${getSymbols(depth)}  ${sign} ${key}: `;
const join = (arr, depth) => `{\n${arr.join('\n')}\n${getSymbols(depth)}}`;

const dataFormater = (data, depth) => {
  if (data instanceof Object) {
    const result = Object.entries(data)
      .flatMap(([key, value]) => `${makeKey(depth, key)}${dataFormater(value, depth + 1)}`);
    return join(result, depth);
  }
  return `${data}`;
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const result = node.map(({ state, key, data }) => {
      if (state === nodeState.nested) {
        return `${makeKey(depth, key)}${iter(data, depth + 1)}`;
      }
      return `${makeKey(depth, key, state)}${dataFormater(data, depth + 1)}`;
    });
    return join(result, depth);
  };
  return iter(tree, 0);
};

export default stylish;
