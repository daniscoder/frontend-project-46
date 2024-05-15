#!/usr/bin/env node

import { program } from 'commander';
import getDiff from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .action(getDiff);

program.parse();
