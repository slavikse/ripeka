import Auth from './Auth';
import EndGame from './EndGame';
import Game from './Game';
import Welcome from './Welcome';

export default [
  ...Auth,
  ...EndGame,
  ...Game,
  ...Welcome,
  {
    path: '*',
    redirect: '/Welcome',
  },
];
