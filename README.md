# Игра: крестики нолики.

## Как начать разработку и собрать проект:
``` bash
### Актуально только для android.

# Настройка среды для разработки на Vue.js в связке с Android SDK:
* https://nativescript-vue.org/en/docs/getting-started/installation/
* https://docs.nativescript.org/start/ns-setup-linux

# Шаги для запуска проекта:
* Устройство должно быть подключено по USB к компьютеру
  и активирована опция: "Передача файлов через USB".
* В разделе "Для разработчиков", должны быть активированы две опции:
  "Отладка по USB" и "Установка через USB".
* Установка зависимостей и запуск проекта на устройстве для разработки:
  $ npm i && npm start
* Для работы в сети, на устройстве должен быть включен Интернет.

# Клонирование & Установка зависимостей & Запуск проекта:
$ git clone https://github.com/slavikse/ripeka.git ripeka && cd ripeka && npm i && npm start

# Сборка проекта:
$ npm run build
Собранный APK файл:
apk/ripeka_${timestamp}.apk
```

Подробнее о шаблоне для Vue по ссылке: https://github.com/nativescript-vue/vue-cli-template

## Игровое поле:
![ripeka_field](https://habrastorage.org/webt/xc/jp/tj/xcjptjl_iwbzdw1ufifjnqfpxio.png)

## dev_console:
![ripeka_dev_console](https://habrastorage.org/webt/vf/bf/bg/vfbfbgwcnkfavpk8_fil-vy-qy0.png)
