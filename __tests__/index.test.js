import { test, expect, describe } from '@jest/globals';
import path from 'path';

import { getPathExtension, buildFullPath, readFile } from '../src/helpers.js';
import genDiff from '../src/index.js';

describe('check extension', () => {
  const checklist = [
    ['file1.json', 'json'],
    ['../../..json', 'json'],
    ['.json', ''],
  ];
  test.each(checklist)('"%s" => "%s"', (filePath, result) => {
    expect(getPathExtension(filePath)).toBe(result);
  });
});

describe('check build full path', () => {
  const absPath = path.resolve(process.cwd(), '__fixtures__', 'file1.json');
  const checklist = [
    [absPath],
    ['file1.json'],
    ['./file1.json'],
    ['__fixtures__/file1.json'],
    ['./__fixtures__/file1.json'],
  ];
  test.each(checklist)('"%s"', (filePath) => {
    expect(buildFullPath(filePath)).toBe(absPath);
  });
});

describe('check gendiff', () => {
  const checklist = [
    ['test', 'file2.json', 'stylish'],
    ['resultStylish.txt', 'file2.json', 'stylish'],
    ['file1.json', 'file2.json', 'test'],
  ];
  test.each(checklist)('exception checking: %s %s -f %s', (filePath1, filePath2, formaterName) => {
    expect(() => genDiff(filePath1, filePath2, formaterName)).toThrow();
  });

  const formaterResults = [
    [undefined, readFile('resultStylish.txt').trim()],
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
