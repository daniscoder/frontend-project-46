import { test, expect } from '@jest/globals';
import getDiff from '../src/index.js';
import { readTextFile } from '../src/helpers.js';

const nestedFileResult = readTextFile('resultNested.txt');
const nestedJson = getDiff('file1.json', 'file2.json');

test('nestedFileComparison', () => {
  expect(nestedJson).toEqual(nestedFileResult);
});
