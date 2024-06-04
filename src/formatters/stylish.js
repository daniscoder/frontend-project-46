import { states } from '../helpers.js';

const baseWith = 4;
const tabChar = ' ';

const chars = ['-', '+', tabChar];
const stateChars = Object.fromEntries(Object.keys(states).slice(0, chars.length)
  .map((key, i) => [key, chars[i]]));

const getIndent = (depth) => tabChar.repeat(depth * baseWith);
const getKeyIndent = (depth, key, sign = tabChar) => `${getIndent(depth)}${tabChar.repeat(2)}${sign} ${key}: `;
const join = (arr, depth) => `{\n${arr.join('\n')}\n${getIndent(depth)}}`;

const stringify = (data, depth) => {
  if (data instanceof Object) {
    const result = Object.entries(data)
      .flatMap(([key, value]) => `${getKeyIndent(depth, key)}${stringify(value, depth + 1)}`);
    return join(result, depth);
  }
  return `${data}`;
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const result = node.map(({ state, key, value }) => {
      if (state === states.nested) {
        return `${getKeyIndent(depth, key)}${iter(value, depth + 1)}`;
      }
      if (state === states.changed) {
        return value
          .map((val, index) => `${getKeyIndent(depth, key, chars[index])}${stringify(val, depth + 1)}`)
          .join('\n');
      }
      return `${getKeyIndent(depth, key, stateChars[state])}${stringify(value, depth + 1)}`;
    });
    return join(result, depth);
  };
  return iter(tree, 0);
};

export default stylish;
