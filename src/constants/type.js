import { getEnv } from '../helpers/configs/env';

export default {
  ARTICLES: `${getEnv('API_SERVER')}/articles`,
  USERS: `${getEnv('API_SERVER')}/users`,
  ROLES: `${getEnv('API_SERVER')}/roles`,
  SIGNIN: `${getEnv('API_SERVER')}/login`,
  SIGNOUT: `${getEnv('API_SERVER')}/logout`,
  SIGNUP: `${getEnv('API_SERVER')}/register`,
  VERIFY: `${getEnv('API_SERVER')}/verify`,
  CHANGE_PASSWORD: `${getEnv('API_SERVER')}/change`,
};
