import { test, expect } from '@jest/globals';
import getDiff from '../src/index.js';
import { readTextFile } from '../src/helpers.js';

const result = readTextFile('result.txt').trim();

test('check json plain', () => {
  expect(getDiff('file1.json', 'file2.json')).toEqual(result);
});
