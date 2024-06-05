import { test, expect, describe } from '@jest/globals';
import path from 'path';

import { getPathExtension, buildFullPath, readFile } from '../src/helpers.js';
import genDiff from '../src/index.js';

describe('check extension', () => {
  test.each([
    ['file1.json', 'json'],
    ['../../..json', 'json'],
    ['.json', ''],
  ])('"%s" => "%s"', (filePath, result) => {
    expect(getPathExtension(filePath)).toBe(result);
  });
});

describe('check build full path', () => {
  const absPath = path.resolve(process.cwd(), '__fixtures__', 'file1.json');
  test.each([[absPath], ['file1.json'], ['./file1.json'], ['__fixtures__/file1.json'], ['./__fixtures__/file1.json']])(
    '"%s"',
    (filePath) => {
      expect(buildFullPath(filePath)).toBe(absPath);
    },
  );
});

describe('check gendiff', () => {
  test('exception checking', () => {
    expect(() => genDiff('test', 'file2.json')).toThrow();
    expect(() => genDiff('resultStylish.txt', 'file2.json')).toThrow(Error);
    expect(() => genDiff('file1.json', 'file2.json', 'test')).toThrow(Error);
  });

  const formaterResults = [
    ['stylish', readFile('resultStylish.txt').trim()],
    ['plain', readFile('resultPlain.txt').trim()],
    ['json', readFile('resultJson.txt').trim()],
  ];
  const formats = [['json'], ['yaml'], ['yml']];
  describe.each(formaterResults)('formater %s', (formaterName, result) => {
    test.each(formats)('format %s', (format) => {
      expect(genDiff(`file1.${format}`, `file2.${format}`, formaterName)).toEqual(result);
    });
  });
});
