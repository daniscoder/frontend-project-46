import _ from 'lodash';
import { states } from './helpers.js';

const getNode = (state, key, value) => ({ state, key, value });

const buildAST = (obj1, obj2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  return sortedKeys.map((key) => {
    if (!Object.hasOwn(obj1, key)) {
      return getNode(states.added, key, obj2[key]);
    }
    if (!Object.hasOwn(obj2, key)) {
      return getNode(states.removed, key, obj1[key]);
    }
    if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
      return getNode(states.nested, key, buildAST(obj1[key], obj2[key]));
    }
    if (obj1[key] === obj2[key]) {
      return getNode(states.unchanged, key, obj1[key]);
    }
    return getNode(states.updated, key, [obj1[key], obj2[key]]);
  });
};

export default buildAST;
