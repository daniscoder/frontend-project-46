[![Actions Status](https://github.com/daniscoder/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/daniscoder/frontend-project-46/actions)
[![Node CI](https://github.com/daniscoder/frontend-project-46/actions/workflows/node-check.yml/badge.svg)](https://github.com/daniscoder/frontend-project-46/actions/workflows/node-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/411f54f05a3db25a271b/maintainability)](https://codeclimate.com/github/daniscoder/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/411f54f05a3db25a271b/test_coverage)](https://codeclimate.com/github/daniscoder/frontend-project-46/test_coverage)
<h1>Вычислитель отличий </h1>
<h3> Утилита позволяет сравнить два конфигурационных файла (с расширением json, yaml или yml) и вывести полученный результат в необходимом формате. </h3>

### Стек: JavaScript, commander, node.js, Jest, CI, eslint, lodash

### Описание:

------------ 

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
