import { addCallback, start } from 'tns-core-modules/fps-meter';

const isDevelopment = global.ENV_MODE === 'development';

if (isDevelopment) {
  addCallback((fps, minFps) => {
    console.log(`fps / min fps : ${fps.toFixed(2)} / ${minFps.toFixed(2)}`);
  });

  start();
}
