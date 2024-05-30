import { test, expect } from '@jest/globals';
import path from 'path';

import { getPathExtension, buildFullPath, readTextFile } from '../src/helpers.js';
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

test('check genDiff', () => {
  const result = readTextFile('resultStylish.txt').trim();
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(result);
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(result);
  expect(genDiff('file1.json', 'file2.yaml')).toEqual(result);

  expect(() => genDiff('test', 'file2.json')).toThrow();
  expect(() => genDiff('resultStylish.txt', 'file2.json')).toThrow(Error);
  expect(() => genDiff('file1.json', 'file2.json', 'test')).toThrow(Error);
});
