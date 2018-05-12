import Vue from 'nativescript-vue';

// todo WIP
const token = 'forever';

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
  state.isLogged = true;
}

export default {
  LOGGED(state, { user, token }) {
    auth(state, user, token);
  },

  LOGIN(state, user) {
    auth(state, user, token);
    setLocalStorage(user, token);
  },

  REGISTRATION(state, user) {
    auth(state, user, token);
    setLocalStorage(user, token);
  },

  LOGOUT(state) {
    clearLocalStorage();

    state.user = {};
    state.token = '';
    state.isLogged = false;

    Vue.router.push({ name: 'Welcome' });
  },
};
