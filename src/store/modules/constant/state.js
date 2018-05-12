const { ENV_MODE } = global;

const local = 'http://localhost:3000/v1/ripeka';
const remote = 'http://185.159.131.201:3000/v1/ripeka';

export default {
  api_uri: ENV_MODE === 'development' ? local : remote,
};
