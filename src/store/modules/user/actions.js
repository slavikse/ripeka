import Vue from 'nativescript-vue';

export default {
  logged({ commit }, token) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      commit('LOGGED', { user, token });
    } catch (err) {
      // todo в базу данных на сервер.
      console.error('ERROR: user/logged', err);
    }
  },

  async login({ commit }, body) {
    const { data } = await Vue.axios.post('/auth', body);
    delete body.password;

    if (data.success) {
      commit('LOGIN', body);
    }
  },

  async registration({ commit }, body) {
    const { data } = await Vue.axios.post('/users', body);
    delete body.password;

    if (data.success) {
      commit('REGISTRATION', body);
    }
  },

  logout({ commit }) {
    commit('LOGOUT');
  },
};
