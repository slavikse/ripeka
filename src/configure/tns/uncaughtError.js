import { on, uncaughtErrorEvent } from 'tns-core-modules/application';

// todo отправлять на сервер как необработанную ошибку.
on(uncaughtErrorEvent, (args) => {
  console.log('NativeScript uncaughtErrorEvent:', args);
});
