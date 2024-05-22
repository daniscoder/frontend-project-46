import _ from 'lodash';

export default (obj1, obj2) => _.union(Object.keys(obj1), Object.keys(obj2))
  .sort()
  .reduce((acc, key) => {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && obj1[key] === obj2[key]) {
      acc.push(`  ${key}: ${obj1[key]}`);
      return acc;
    }
    if (Object.hasOwn(obj1, key)) {
      acc.push(`- ${key}: ${obj1[key]}`);
    }
    if (Object.hasOwn(obj2, key)) {
      acc.push(`+ ${key}: ${obj2[key]}`);
    }
    return acc;
  }, []);
