import { test, expect, describe } from '@jest/globals';
import path from 'path';

import { getPathExtension, buildFullPath, readFile } from '../src/helpers.js';
import genDiff from '../src/index.js';

test('check extension', () => {
  expect(getPathExtension('.json')).toBe('');
  expect(getPathExtension('../../..json')).toBe('json');
  expect(getPathExtension('file1.json')).toBe('json');
});

test('check build full path', () => {
  const absPath = path.resolve(process.cwd(), '__fixtures__', 'file1.json');
  expect(buildFullPath(absPath)).toBe(absPath);
  expect(buildFullPath('file1.json')).toBe(absPath);
  expect(buildFullPath('./file1.json')).toBe(absPath);
  expect(buildFullPath('__fixtures__/file1.json')).toBe(absPath);
  expect(buildFullPath('./__fixtures__/file1.json')).toBe(absPath);
  expect(buildFullPath('test.txt')).toBe(path.resolve(process.cwd(), 'test.txt'));
});

const formats = [['json'], ['yaml'], ['yml']];
const formaterResults = [
  ['stylish', readFile('resultStylish.txt').trim()],
];
describe.each(formaterResults)('qqqqqqq', (formater, result) => {
  test.each(formats)('gendiff using %s', (format) => {
    expect(genDiff(`file1.${format}`, `file2.${format}`, formater)).toEqual(result);

    // expect(() => genDiff('test', 'file2.json')).toThrow();
    // expect(() => genDiff('resultStylish.txt', 'file2.json')).toThrow(Error);
    // expect(() => genDiff('file1.json', 'file2.json', 'test')).toThrow(Error);
  });
});
