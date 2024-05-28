import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';

import { getPathExtension, buildFullPath, readTextFile } from '../src/helpers.js';
import parsers from '../src/parsers.js';
import genDiff from '../src/index.js';
import formatters from '../src/formatters/index.js';

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

test('check read text file', () => {
  const textFile = fs.readFileSync(buildFullPath('file1.json')).toString();
  expect(readTextFile('file1.json')).toBe(textFile);
  expect(() => readTextFile('test')).toThrow();
});

test('check parsers', () => {
  expect(parsers('{"test": "test"}', 'json')).toEqual({ test: 'test' });
  expect(parsers('test: test', 'yaml')).toEqual({ test: 'test' });
  expect(parsers('test:\n  test1: test', 'yml')).toEqual({ test: { test1: 'test' } });
  expect(() => parsers({}, 'txt')).toThrow(Error);
});

test('check formatters error', () => {
  expect(() => formatters({}, 'test')).toThrow(Error);
});

test('check json plain', () => {
  const result = readTextFile('result.txt').trim();
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(result);
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(result);
  expect(genDiff('file1.json', 'file2.yaml')).toEqual(result);
});
