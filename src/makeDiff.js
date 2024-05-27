import _ from 'lodash';

export default (obj1, obj2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  console.log(sortedKeys);
  const result = sortedKeys.reduce((acc, key) => {
    if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
      acc.push({'nested', key)[]);
      return acc;
    }
    return acc;
  }, []);
  // const result = sortedKeys.reduce((acc, key) => {
  //   if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && obj1[key] === obj2[key]) {
  //     acc.push(getStr(' ', key, obj1[key]));
  //     return acc;
  //   }
  //   if (Object.hasOwn(obj1, key)) {
  //     acc.push(getStr('-', key, obj1[key]));
  //   }
  //   if (Object.hasOwn(obj2, key)) {
  //     acc.push(getStr('+', key, obj2[key]));
  //   }
  //   return acc;
  // }, []);
  return result;
};
