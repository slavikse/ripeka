import Vue from 'nativescript-vue';

function setLocalStorage(user, token) {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
}

function clearLocalStorage() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

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

  LOGIN(state, user) {
    const token = '9876543210';

    auth(state, user, token);
    setLocalStorage(user, token);
  },

  // todo
  CREATE_USER(state, user) {
    auth(state, user, user.token);
    setLocalStorage(user);
  },

  LOGOUT(state) {
    clearLocalStorage();

    state.user = {};
    state.token = '';
    state.logged = false;

    Vue.router.push({ name: 'Login' });
  },
};
