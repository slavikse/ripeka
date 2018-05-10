import { addCallback, start } from 'tns-core-modules/fps-meter';

const debug = process.env.NODE_ENV === 'production';

if (!debug) {
  addCallback((fps, minFps) => {
    console.log(`fps / min fps : ${fps.toFixed(2)} / ${minFps.toFixed(2)}`);
  });

  start();
}
