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

export default function noise({
  name,
  loop = false,
  complete = complete,
  error = error,
  info = info,
}) {
  try {
    const player = new TNSPlayer();
    const options = {
      audioFile: audios[name],
      loop,
      completeCallback: complete,
      errorCallback: error,
      infoCallback: info,
    };

    // todo initFromFile
    // player.playFromFile(options);
    player.playFromUrl(options);
  } catch (err) {
    console.error('[TNSPlayer] noise', err);
  }
}

// todo на второй игре звук пропадает...
// todo играть треки в несколько дорожек.
// todo останавить воспроизведение:
// https://market.nativescript.org/plugins/nativescript-audio#tnsplayer-methods
