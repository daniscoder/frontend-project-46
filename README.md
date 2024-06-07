[![Actions Status](https://github.com/daniscoder/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/daniscoder/frontend-project-46/actions)
[![Node CI](https://github.com/daniscoder/frontend-project-46/actions/workflows/node-check.yml/badge.svg)](https://github.com/daniscoder/frontend-project-46/actions/workflows/node-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/411f54f05a3db25a271b/maintainability)](https://codeclimate.com/github/daniscoder/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/411f54f05a3db25a271b/test_coverage)](https://codeclimate.com/github/daniscoder/frontend-project-46/test_coverage)
![GitHub top language](https://img.shields.io/github/languages/top/daniscoder/frontend-project-46)

<h1>Вычислитель отличий </h1>
<h3> Утилита позволяет сравнить два конфигурационных файла (с расширением json, yaml или yml) и вывести полученный результат в необходимом формате. </h3>

### Стек:

------------
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://github.com/topics/javascript)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/nodejs)
[![Commander.js](https://img.shields.io/badge/Commander.js-181818?style=for-the-badge&logo=slashdot&logoColor=white)](https://github.com/tj/commander.js)
[![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)](https://github.com/jestjs/jest)
[![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://github.com/eslint/eslint)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)](https://github.com/prettier/prettier)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://docs.github.com/ru/actions)

### Описание:

------------
> Проект **«Вычислитель отличий»** создан в рамках профессии **«Фронтенд-разработчик»** на платформе [Hexlet.io](https://ru.hexlet.io).

В рамках данного проекта реализовано создание **AST** (_англ._ Abstract Syntax Tree) - абстрактного синтаксического дерева, на основании которого имеющиеся форматеры (<code>stylish</code>, <code>plain</code>, <code>json</code>) выводят различия как **плоских**, так и **вложенных** файлов (используется [рекурсия](https://ru.hexlet.io/blog/posts/recursive)).

### Установка:
- склонировать репозиторий
- в папке проекта дать команду "make install" для установки зависимостей, затем "npm link"
- далее "gendiff options filepath1 filepath2". Например, "gendiff -f plain file1.json file2.json"

Доступные опции:
- gendiff -h - посмотреть справку
- gendiff -v - посмотреть версию утилиты
- diff -f - установить формат. Всего доступны 3 формата: stylish (установлен по умолчанию), plain и json
------------

Различия между плоскими файлами (JSON)
[![asciicast](https://asciinema.org/a/LdrJCuo9a5n6pc0WqQMjMdCdr.svg)](https://asciinema.org/a/LdrJCuo9a5n6pc0WqQMjMdCdr)



[![asciicast](https://asciinema.org/a/wk0fFWyz7Uq0O91HpFGSbSOLO.svg)](https://asciinema.org/a/wk0fFWyz7Uq0O91HpFGSbSOLO)
