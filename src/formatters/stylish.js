import { states, stateChars } from '../helpers.js';

const baseWith = 4;

const tabChar = ' ';
const getIndent = (depth) => tabChar.repeat(depth * baseWith);
const getKeyIndent = (depth, key, sign) => `${getIndent(depth)}${tabChar.repeat(2)}${sign} ${key}: `;

const stylish = (tree) => {
  // console.log(JSON.stringify(tree, null, 2));
  const iter = (node, depth) => {
    const result = node.map((obj) => {
      if (obj.state === states.nested) {
        return `${getKeyIndent(depth, obj.key, stateChars[obj.state])}${iter(obj.children, depth + 1)}`;
      }
      if (obj.value instanceof Object) {
        const arr = Object.entries(obj.value).flatMap(([key, value]) => ({
          state: states.object, key, value,
        }));
        return `${getKeyIndent(depth, obj.key, stateChars[obj.state])}${iter(arr, depth + 1)}`;
      }
      if (obj.state === states.changed) {
        const removed = `${getKeyIndent(depth, obj.key, stateChars[states.removed])}${obj.value1}`;
        const added = `${getKeyIndent(depth, obj.key, stateChars[states.added])}${obj.value2}`;
        return `${removed}\n${added}`;
      }
      return `${getKeyIndent(depth, obj.key, stateChars[obj.state])}${obj.value}`;
    });
    return `{\n${result.join('\n')}\n${getIndent(depth)}}`;
  };
  return iter(tree, 0);
};

export default stylish;
