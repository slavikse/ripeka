import { on, uncaughtErrorEvent } from 'tns-core-modules/application';

// todo отправлять на сервер как необработанную ошибку.
on(uncaughtErrorEvent, (err) => {
  console.log('NativeScript uncaughtErrorEvent:', err);
});

on('uncaughtError', (err) => {
  console.log('NativeScript uncaughtError:', err);
});
