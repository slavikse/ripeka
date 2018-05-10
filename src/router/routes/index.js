import Auth from './Auth';
import EndGame from './EndGame';
import Game from './Game';

export default [
  ...Auth,
  ...EndGame,
  Game,
  {
    path: '*',
    redirect: '/Game',
  },
];
