import Game from '../../../components/Game';
import Login from '../../../components/Login';

const screens = [
  {
    path: '/',
    name: 'Game',
    component: Game,
    // meta: { auth: false },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

export default screens;
