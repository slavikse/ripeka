import basic from './basic';
import screens from './screens';

export default [
  ...basic,
  ...screens,
  {
    path: '*',
    redirect: '/',
  },
];
