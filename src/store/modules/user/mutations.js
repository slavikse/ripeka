import Vue from 'nativescript-vue';

// function setLocalStorage(user) {
//   localStorage.setItem('user', JSON.stringify(user));
//   localStorage.setItem('token', user.token);
// }

function auth(state, user, token) {
  Vue.axios.defaults.headers.common.token = token;

  state.user = user;
  state.token = token;
  state.logged = true;
}

export default {
  LOGGED(state, { user, token }) {
    auth(state, user, token);
  },

  // todo
  //LOGIN(state, { user, token: { token } }) {
  //  auth(state, user, token);
  //  setLocalStorage(user);
  //},

  // todo
  //CREATE_USER(state, user) {
  //  auth(state, user, user.token);
  //  setLocalStorage(user);
  //},

  LOGOUT(state) {
    // localStorage.removeItem('user');
    // localStorage.removeItem('token');

    state.user = {};
    state.token = '';
    state.logged = false;

    Vue.router.push({ name: 'Login' });
  },
};
