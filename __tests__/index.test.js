import { test, expect } from '@jest/globals';
import getDiff from '../src/index.js';
import { readTextFile } from '../src/helpers.js';

const result = readTextFile('result.txt').trim();
// const errorLoadResult = readTextFile('errorData.txt').trim();

test('check json plain', () => {
  expect(getDiff('file1.json', 'file2.json')).toEqual(result);
  expect(getDiff('file1.yaml', 'file2.yaml')).toEqual(result);
  expect(getDiff('file1.yml', 'file2.yml')).toEqual(result);
  expect(getDiff('file1.json', 'file2.yaml')).toEqual(result);
  // expect(getDiff('result.txt', 'file2.json')).toThrow(errorLoadResult);
});
