import { getNode, statuses } from '../helpers.js';

const plain = (tree) => {
  // const iter = (node, depth) => {
  //   const result = node.map(({ state, key, data }) => {
  //     if (state === nodeState.nested) {
  //       return iter(data, depth + 1);
  //     }
  //     if (state === nodeState.)
  //     return `${getKeyIndent(depth, key, state)}${data}`;
  //   });
  //   return `{\n${result.join('\n')}\n${getIndent(depth)}}`;
  // };
  return iter(tree, 0);
};

export default plain;
