import Vue from 'nativescript-vue';

const unAuthCode = 401;

// async/await (Promise) - axios.interceptors не поддерживается.
function axiosSetup(apiUrl) {
  Vue.axios.defaults.baseURL = apiUrl;

  // Запрос на сервер.
  Vue.axios.interceptors.request.use((request) => {
    // console.info('Starting Request: ', request);
    return request;
  }, err => Promise.reject(err));

  // Ответ от сервера.
  Vue.axios.interceptors.response.use((response) => {
    // console.info('Getting Response: ', response);
    return response;
  }, async (err) => {
    // Если токен устарел или не валиден - разлогинивает.
    if (err.response.status === unAuthCode) {
      await Vue.store.dispatch('user/logout');
    }

    return Promise.reject(err);
  });
}

export default function hooks(apiUrl) {
  axiosSetup(apiUrl);
}
