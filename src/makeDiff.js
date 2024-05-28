import _ from 'lodash';
import { nodeState } from './helpers.js';

const getNode = (state, key, data) => ({ state, key, data });

const makeDiff = (obj1, obj2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  return sortedKeys.reduce((acc, key) => {
    if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
      acc.push(getNode(nodeState.nested, key, makeDiff(obj1[key], obj2[key])));
      return acc;
    }
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && obj1[key] === obj2[key]) {
      acc.push(getNode(nodeState.same, key, obj1[key]));
      return acc;
    }
    if (Object.hasOwn(obj1, key)) {
      acc.push(getNode(nodeState.removed, key, obj1[key]));
    }
    if (Object.hasOwn(obj2, key)) {
      acc.push(getNode(nodeState.added, key, obj2[key]));
    }
    return acc;
  }, []);
};

export default makeDiff;
