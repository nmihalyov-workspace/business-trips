0.1.0 – Первый релиз

0.2.0 – Добавлен ESLint

0.2.1 – Внесение исправлений

0.2.2 – Внесение исправлений, переход на стрелочные функции

0.2.3 – Добавлен плагин `merge-media-queries`

0.3.0 – Добавлен более удобный способ импорта JS-библиотек

0.3.1 – Добавлен шаблон **Pug** для более быстрого старта

0.3.2 – Исправление ошибок

0.3.3 – Исправление ошибок работы тасков JS

0.3.4 – Исправления недочётов

0.3.5 – Убран плагин минификации SVG из-за проблем с изображением на выходе

0.3.6 – Исправлен таск `default` для большей производительности

0.3.7 – Добавлена возможность подключать файлы js в файл common.js. Минорные исправления

0.3.8 – Исправление ошибок предыдущей версии

0.3.9 – Исправление ошибок предыдущих версий, общие улучшения

0.4.0 – Добавлен Babel для транспиляции ES6 в ES5

0.5.0 – Добавлен плагин для генерации критического CSS

0.5.1 – Слегка изменена структура папок. Добавлен таск `misc` для удаления лишних файлов (`.gitkeep`, `changelog.md` и `readme.md`)

0.5.2 – Папки `modules` были преименованы в `components`, т.к. лучше отражают смысл названия

0.5.3 – Теперь `gulpfile.js` полностью прокомментирован и по нему легко ориентироваться даже новичку!

0.5.4 – SASS и JS собираются в продакшен без sourcemap'ов, чтобы файлы весили не так много. Минорные изменения

0.5.5 – Оптимизирован таск SASS, а так же другие мелкие доработки

0.6.0 – Большое обновление: добавлена генерация Service Worker, manifest.json, секция head в index.pug была расширена, обновлена документация, а так же внесены мелкие правки. Теперь разрабатывать прогрессивное веб-приложение с GPS ещё проще

0.6.1 – Удалён таск `css`, теперь это просто `sass`

0.6.2 – Исправлены метаданные

0.6.3 – Service Worker собирается только в папку продакшена, чтобы не мешать разработке, кэшируя всё подряд

0.6.4 – Исправлен пример подключения стилей библиотек

0.6.5 – Генерация критического CSS перенесена в продакшен, чтобы не мешать при разработке

0.6.6 – Исправление ошибок `changelog.md`

0.7.0 – Переработана структура проекта. Переход на компонентый подход ([подробнее](https://github.com/nmihalyov/gulp-pure-start/blob/master/readme.md#Структура))

0.7.1 – Удалён таск `uncss`, вызывающий проблемы при сборке проекта в production build

0.7.2 – Удалён Service Worker за ненадобностью в данной сборке (исправление ошибок)

0.8.0 – Настройка ESLint, исправление незначительных ошибок, прочее

0.9.0 – Апдейт до Gulp 4, переработка структуры (сервер запускается из папки `build`, в папке `dev` только рабочие файлы, билд в продакшен находится в папке `prod`)

0.9.1 – Отказ от `bower` в пользу `yarn`

1.0.0 – Отладка сборки. Релиз

1.0.1 – Фикс отсутствующей зависимости

1.1.0 – Правки файла манифеста. Подключение библиотеки для сбрасывания стилей, а также дефолтные стили в `_base.sass` и стили для подключения шрифтов.

1.2.0 – Более эффективная загрузка скриптов с `defer` в теге `head`. Перенос манифеста в `build`. Исправление ошибки с загрузкой *sanitize.css*

1.2.1 – Исправление ошибок

1.2.2 – Исправление ошибки минификации ES6 кода, обновление версий зависимостей

1.2.3 – Обновление документации

1.2.4 – Переработана система сжатия изображений, теперь изображения сжимаются более эффективно

1.3.0 – Быстрое создание компонентов, готовые компоненты уже в сборке