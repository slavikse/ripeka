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

  // todo
  // async login({ commit }, { phone, password }) {
  //   const { data } = await Vue.axios.post('/sign_in', { phone, password });
  //
  //   if (data.success) {
  //     commit('LOGIN', data.body);
  //   }
  // },

  async logout({ commit }) {
    await commit('LOGOUT');
  },
};
