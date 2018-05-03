import Game from '../../components/Game';
import Login from '../../components/Login';

export default [
  {
    path: '/',
    name: 'Game',
    component: Game,
    // meta: { auth: false },
    // props: false,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // meta: { auth: false },
  },
  {
    path: '*',
    redirect: '/',
  },
];
