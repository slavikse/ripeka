// import Vue from 'nativescript-vue';

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
    await new Promise(async (resolve, reject) => {
      await setTimeout(async () => {
        // const { data } = await Vue.axios.post('/sign_in', { phone, password });
        const data = { success: true, body };

        if (data.success) {
          commit('LOGIN', data.body);
        }

        resolve();
      }, 3000);
    });
  },

  async logout({ commit }) {
    await commit('LOGOUT');
  },
};
