import Vue from 'nativescript-vue';

const isDevelopment = global.ENV_MODE === 'development';
const unAuthCode = 401;

// async/await (Promise) - axios.interceptors не поддерживается.
function axiosSetup(apiUrl) {
  Vue.axios.defaults.baseURL = apiUrl;

  // Запрос на сервер.
  Vue.axios.interceptors.request.use((request) => {
    isDevelopment && console.info('Starting Request:', request);
    return request;
  }, err => Promise.reject(err));

  // Ответ от сервера.
  Vue.axios.interceptors.response.use((response) => {
    isDevelopment && console.info('Getting Response:', response);
    return response;
  }, (err) => {
    // Если токен устарел или не валиден - разлогинивает.
    if (err.response.status === unAuthCode) {
      Vue.store.dispatch('user/logout');
    }

    return Promise.reject(err);
  });
}

export default function hooks(apiUrl) {
  axiosSetup(apiUrl);
}
