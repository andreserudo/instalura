import { setCookie } from 'nookies';
import httpClient from '../../infra/httpClient';

const URL = 'https://instalura-api.vercel.app/api/login';
export const LOGIN_COOKIE_APP_TOKEN = 'SERUDO';
export const DAY_IN_SECONDS = 86400;
export const handleLogin = async ({ email, password }) => {
  //
  const value = {
    username: email,
    password,
  };
  const loginRequest = await httpClient(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(value),
  });

  // const response = await loginRequest.json();
  console.log(loginRequest);
  const { token } = loginRequest.data;
  if (!token) {
    throw new Error('Cadê o token?');
  }
  setCookie(null, LOGIN_COOKIE_APP_TOKEN, token, {
    path: '/',
    maxAge: DAY_IN_SECONDS * 7,
  });

  return null;
};

export const handleLogout = () => {

};
