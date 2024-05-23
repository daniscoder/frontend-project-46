import _ from 'lodash';

const tab = '  ';

const getStr = (type, key, value) => `${tab}${type} ${key}: ${value}`;

export default (obj1, obj2) => {
  const sortedKeys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  const result = sortedKeys.reduce((acc, key) => {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && obj1[key] === obj2[key]) {
      acc.push(getStr(' ', key, obj1[key]));
      return acc;
    }
    if (Object.hasOwn(obj1, key)) {
      acc.push(getStr('-', key, obj1[key]));
    }
    if (Object.hasOwn(obj2, key)) {
      acc.push(getStr('+', key, obj2[key]));
    }
    return acc;
  }, []);
  return ['{', ...result, '}'].join('\n');
};
