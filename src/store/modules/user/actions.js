import Vue from 'nativescript-vue';

export default {
  async logged({ commit }, token) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      await commit('LOGGED', { user, token });
    } catch (err) {
      console.error('logged', err);
    }
  },

  async login({ commit }, body) {
    const { data } = await Vue.axios.post('/Auth', body);
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

  async logout({ commit }) {
    await commit('LOGOUT');
  },
};
