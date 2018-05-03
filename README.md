# Игра: крестики нолики.

## Как начать разработку и собрать проект:
``` bash
### Актуально только для android.

# Настройка среды для разработки:
* https://nativescript-vue.org/en/docs/getting-started/installation/
* https://docs.nativescript.org/start/ns-setup-linux

# Установка зависимостей и запуск на мобильном устройстве для отладки:
* Устройство должно быть подключено по USB к компьютеру
  и активирована опция: "Передача файлов через USB".
* В разделе "Для разработчиков", должны быть активированы две опции:
  "Отладка по USB" и "Установка через USB".
* Установка зависимостей и запуск проекта для отладки:
  $ npm i && npm run debug:android
* Для работы в сети, на устройстве должен быть включен Интернет.

# Запуск проекта:
$ git clone https://github.com/slavikse/ripeka.git ripeka && cd ripeka && npm i && npm run watch:android

# Сборка проекта:
$ npm run build:android
APK файл находится в директории:
dist/platforms/android/app/build/outputs/apk/debug

```

Подробнее о шаблоне для Vue по ссылке: https://github.com/nativescript-vue/vue-cli-template
