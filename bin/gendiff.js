#!/usr/bin/env node

import { program } from 'commander';
import getDiff from '../src/index.js';
import { formatNames } from '../src/helpers.js';

program
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format', formatNames.stylish)
  .action((filepath1, filepath2) => {
    const formatName = program.opts().format;
    const diff = getDiff(filepath1, filepath2, formatName);
    console.log(diff);
  });

program.parse();
