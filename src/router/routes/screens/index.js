import { ScreenVictory, ScreenDrawnGame } from '../../../components/Screen';

const screens = [
  {
    path: '/screen-victory',
    name: 'ScreenVictory',
    component: ScreenVictory,
    meta: { auth: true },
  },
  {
    path: '/screen-drawn-game',
    name: 'ScreenDrawnGame',
    component: ScreenDrawnGame,
    meta: { auth: true },
  },
];

export default screens;
