import { TNSPlayer } from 'nativescript-audio';

// Шумотека: noisefx.ru
const audios = {
  ambient: '~/audios/ambient.mp3',
  cancel: '~/audios/cancel.mp3',
  moving: '~/audios/moving.mp3',
  winner: '~/audios/winner.mp3',
};

function complete() {
  console.log('[TNSPlayer] complete');
}

function error(errorObject) {
  console.log('[TNSPlayer] error', JSON.stringify(errorObject));
}

function info(args) {
  console.log('[TNSPlayer] info', JSON.stringify(args));
}

export default async function noise({
  audio,
  loop = false,
  complete = complete,
  error = error,
  info = info,
}) {
  try {
    const player = new TNSPlayer();
    const options = {
      audioFile: audios[audio],
      loop,
      completeCallback: complete,
      errorCallback: error,
      infoCallback: info,
    };

    player.playFromFile(options);
  } catch (err) {
    console.error('[TNSPlayer] noise', err);
  }
}

// todo играть треки в несколько дорожек.
// todo останавить воспроизведение:
// https://market.nativescript.org/plugins/nativescript-audio#tnsplayer-methods

// watch: {
//   // todo тригеррить не так. когда будет на отдельной дорожке.
//   move: {
//     immediate: true,
//     handler() {
//       if (this.move === 0) {
//         setTimeout(() => {
//           noise({ audio: 'ambient', loop: true });
//         }, 200);
//       }
//     },
//   },
// },
