/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import TokenService from './token.service';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,

  headers: {
    'Content-Type': 'application/json',
  },
});

function isAccessTokenExpired() {
  const token = TokenService.getLocalAccessToken();
  if (token) {
    const decodedToken: { exp: number } = jwt_decode(token);

    const currentTime = Date.now() / 1000;
    return decodedToken?.exp < currentTime;
  }
  return true;
}

instance.interceptors.request.use(
  config => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      if (isAccessTokenExpired()) {
        TokenService.removeUser();
        window.location.href = '/';
        return Promise.reject(new Error('Access token expired')); // Return a rejected promise
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error); // Return a rejected promise
  },
);

export default instance;