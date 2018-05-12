const { ENV_MODE } = global;

const local = 'http://localhost:3000/v1';
const remote = 'http://185.159.131.201:3000/v1';

export default {
  api_uri: ENV_MODE === 'development' ? local : remote,
};
