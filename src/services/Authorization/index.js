import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import { LOGIN_COOKIE_APP_TOKEN } from '../Login';

const authService = (ctx) => {
  const cookies = parseCookies(ctx);
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];

  const getSession = () => {
    const session = jwt.decode(token);
    return session.user;
  };

  const hasActiveSession = () => {
    // const tokenVerified = jwt.verify(token);
    if (!token) {
      return false;
    }

    return true;
  };

  return {
    getSession,
    hasActiveSession,
  };
};

export default authService;
