import _ from 'lodash';
import { states } from './helpers.js';

const buildAST = (obj1, obj2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  return sortedKeys.map((key) => {
    if (!Object.hasOwn(obj1, key)) {
      return { state: states.added, key, value: obj2[key] };
    }
    if (!Object.hasOwn(obj2, key)) {
      return { state: states.removed, key, value: obj1[key] };
    }
    if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
      return { state: states.nested, key, children: buildAST(obj1[key], obj2[key]) };
    }
    if (obj1[key] === obj2[key]) {
      return { state: states.unchanged, key, value: obj1[key] };
    }
    return {
      state: states.changed, key, value1: obj1[key], value2: obj2[key],
    };
  });
};

export default buildAST;
