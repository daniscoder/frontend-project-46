[![Actions Status](https://github.com/daniscoder/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/daniscoder/frontend-project-46/actions)
[![Node CI](https://github.com/daniscoder/frontend-project-46/actions/workflows/node-check.yml/badge.svg)](https://github.com/daniscoder/frontend-project-46/actions/workflows/node-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/411f54f05a3db25a271b/maintainability)](https://codeclimate.com/github/daniscoder/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/411f54f05a3db25a271b/test_coverage)](https://codeclimate.com/github/daniscoder/frontend-project-46/test_coverage)
![GitHub top language](https://img.shields.io/github/languages/top/daniscoder/frontend-project-46)

# Вычислитель отличий

___
### Утилита позволяет сравнить два конфигурационных файла и выводить различия как плоских, так и вложенных структур.

## Стек:

---
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://github.com/topics/javascript)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/nodejs)
[![Commander.js](https://img.shields.io/badge/Commander.js-181818?style=for-the-badge&logo=slashdot&logoColor=white)](https://github.com/tj/commander.js)
[![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)](https://github.com/jestjs/jest)
[![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://github.com/eslint/eslint)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)](https://github.com/prettier/prettier)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://docs.github.com/ru/actions)

## Описание

---
> Проект «Вычислитель отличий» создан в рамках профессии «Фронтенд-разработчик» на платформе
> [Hexlet.io](https://ru.hexlet.io).

В рамках данного проекта реализовано создание **AST** (_англ._ Abstract Syntax Tree) - абстрактного синтаксического дерева,
на основании которого имеющиеся форматеры (`stylish`, `plain`, `json`) выводят различия как **плоских**,
так и **вложенных** структур (используется [рекурсию](https://ru.hexlet.io/blog/posts/recursive)).

### Особенности

- [x] Доступны следующие форматы для чтения: `JSON`, `YAML` (`YML`)
- [x] Реализованы следующие форматеры: `stylish` (по умолчанию), `plain` и `json`
- [x] Возможность использовать как библиотеку, так и как `CLI` команду

## Установка

___
#### Минимальные системные требования:

- Операционная система Linux, MacOS, Windows (WSL)
- Установленные пакеты: [Node.js](https://nodejs.org/en) версии 18.x и выше,
[npm](https://www.npmjs.com), [make](https://www.gnu.org/software/make/)

#### Для работы с проектом необходимо выполнить следующие действия по его установке:

1. Клонировать репозиторий:
    ```shell
    # HTTPS
    https://github.com/daniscoder/frontend-project-46.git
    ```
    или
    ```shell
    # SSH
    git@github.com:daniscoder/frontend-project-46.git
    ```
2. Установить:
    ```shell
    make install
    ```
3. Создать символические ссылки:
    ```shell
    make link
    ```

## Использование

___
### Библиотека

Данный проект можно использовать как *библиотеку* в любом проекте:
```javascript
import genDiff from '@hexlet/code';

const diff = genDiff(filepath1, filepath2, formatName);
console.log(diff);
```

где `filepath1` и `filepath1` — названия (или абсолютные пути) файлов, разницу которых мы хотим вывести;
`formatName` — название форматера (`stylish`, `plain` или `json`).

### CLI команда

Можно использовать как утилиту *командной строки*:

```shell
gendiff -h
```
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

## Форматеры

___

### Формат `stylish`

- Если значение было **добавлено** или **удалено**, либо **изменило** свое значение, то указываются знаки + и - соответственно
- В остальных случаях значение либо не изменилось, либо в обоих файлах является `объект`

Пример для плоских файлов:
```shell
gendiff filepath1.json filepath2.json
```
```
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

#### Различия между плоскими файлами (`JSON`)
[![asciicast](https://asciinema.org/a/hPJNkncdRUN3sua2X1c75Zpua.svg)](https://asciinema.org/a/hPJNkncdRUN3sua2X1c75Zpua)

#### Различия между плоскими файлами (`YAML`, `YML`)
[![asciicast](https://asciinema.org/a/4ddl6wyZOZEn2wjj7KJH1ihwr.svg)](https://asciinema.org/a/4ddl6wyZOZEn2wjj7KJH1ihwr)

#### Различия между вложенными файлами (`JSON`)
[![asciicast](https://asciinema.org/a/4mWHWvujmgJEnfql2hZXhsoE5.svg)](https://asciinema.org/a/4mWHWvujmgJEnfql2hZXhsoE5)

#### Различия между вложенными файлами (`YAML`, `YML`)
[![asciicast](https://asciinema.org/a/EouTJD4GmyML6aXFIG1ua5qYY.svg)](https://asciinema.org/a/EouTJD4GmyML6aXFIG1ua5qYY)

### Формат `plain`

- Если свойство имеет "сложное значение" (`объект`, `массив`), то выводится `[complex value]`
- Если свойство является вложенным, то оно не учитывается: сохраняется лишь путь до него, который используется при
выводе остальных "плоских" свойств, находящийся внутри него
- Если свойство не было изменено, то оно не выводится

Пример для плоских файлов:
```shell
gendiff --format plain filepath1.json filepath2.json
```
```
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
```

#### Различия между вложенными файлами (`JSON`)
[![asciicast](https://asciinema.org/a/eOJ33eAZiohXi3KP6RcRDlUZy.svg)](https://asciinema.org/a/eOJ33eAZiohXi3KP6RcRDlUZy)

#### Различия между вложенными файлами (`YAML`, `YML`)
[![asciicast](https://asciinema.org/a/xenNHGsr4IDd7x1NBZyTxCbuu.svg)](https://asciinema.org/a/xenNHGsr4IDd7x1NBZyTxCbuu)

### Формат `json`

Внутреннее представление — это дерево, где каждый элемент — это узел, имеющий свое состояние, ключ и значение
Для вложенных данных есть понятие children (как в любом дереве), содержащий массив объектов

#### Состояния:

- `nested` - является вложенным, имеет ключ `children`
- `added` - значение отсутствует в первом файле и присутствует во втором
- `deleted` - значение присутствует в первом файле и отсутствует во втором
- `updated` - разные значения в обоих файлах: [`значение в первом файле`, `значение во втором файле`]
- `unchanged` - одинаковые значения в обоих файлах

Пример для плоских файлов:
```shell
gendiff --format json filepath1.json filepath2.json
```
```
[
  {
    "state": "removed",
    "key": "follow",
    "value": false
  },
  {
    "state": "unchanged",
    "key": "host",
    "value": "hexlet.io"
  },
  {
    "state": "removed",
    "key": "proxy",
    "value": "123.234.53.22"
  },
  {
    "state": "updated",
    "key": "timeout",
    "value": [
      50,
      20
    ]
  },
  {
    "state": "added",
    "key": "verbose",
    "value": true
  }
]
```

#### Различия между вложенными файлами (`JSON`)
[![asciicast](https://asciinema.org/a/7ymCsoFmtb8VZk2c0JsoYtPOK.svg)](https://asciinema.org/a/7ymCsoFmtb8VZk2c0JsoYtPOK)

#### Различия между вложенными файлами (`YAML`, `YML`)
[![asciicast](https://asciinema.org/a/F6t9gc9JjPOtcV25SAsL5pL2r.svg)](https://asciinema.org/a/F6t9gc9JjPOtcV25SAsL5pL2r)

## Структура проекта

___

```
.
├── Makefile
├── README.md
├── __fixtures__
│   ├── file1.json
│   ├── file1.yaml
│   ├── file1.yml -> file1.yaml
│   ├── file2.json
│   ├── file2.yaml
│   ├── file2.yml -> file2.yaml
│   ├── resultJson.txt
│   ├── resultPlain.txt
│   └── resultStylish.txt
├── __tests__
│   └── index.test.js
├── bin
│   └── gendiff.js
├── package-lock.json
├── package.json
└── src
    ├── buildAST.js
    ├── formatters
    │   ├── index.js
    │   ├── json.js
    │   ├── plain.js
    │   └── stylish.js
    ├── helpers.js
    ├── index.js
    └── parsers.js

```

## Дополнительные команды

Полезные команды, которые доступны для использования в проекте.

Установка зависимостей `CI` проекта:
```shell
make install
```

Создание символических ссылок:
```shell
make link
```

Публикация проекта с флагом `--dry-run`:
```shell
make publish
```

Проверка кода проекта с помощью линтера `ESLint`:
```shell
make lint
```

Исправление кода проекта с помощью линтера `ESLint`:
```shell
lint-fix
```

Тестирование проекта посредством `Jest`:
```shell
make test
```

Вывод покрытия тестами проекта посредством `Jest`:
```shell
make test-coverage
```

___

Copyright (c) 2024 Danis Arslanov
