import _ from 'lodash';
import { statuses, getNode } from './helpers.js';

const makeDiff = (obj1, obj2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  return sortedKeys.map((key) => {
    if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
      return getNode(statuses.nested, key, makeDiff(obj1[key], obj2[key]));
    }
    if (!Object.hasOwn(obj1, key)) {
      return getNode(statuses.added, key, obj2[key]);
    }
    if (!Object.hasOwn(obj2, key)) {
      return getNode(statuses.removed, key, obj1[key]);
    }
    const node = getNode(statuses.updated, key, obj1[key]);
    if (obj1[key] !== obj2[key]) {
      node.updValue = obj2[key];
    }
    return node;
  });
};

export default makeDiff;
