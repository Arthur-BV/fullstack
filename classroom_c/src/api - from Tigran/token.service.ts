// import { IAuth, IUser } from '../../../utils/types';

const setAuth = (auth: any) => {
  localStorage.setItem('auth', JSON.stringify(auth));
};

const getLocalAccessToken = (): string => {
  const auth = JSON.parse(localStorage.getItem('auth') || 'null') as any;
  return auth?.access_token || '';
};

const getLocalUserId = (): string => {
  const auth = JSON.parse(localStorage.getItem('auth') || 'null') as any;
  return auth?.id || '';
};

const setUser = (user: any) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = (): any | null => {
  const user = localStorage.getItem('user');
  return user ? (JSON.parse(user) as any) : null;
};

const removeUser = () => {
  localStorage.removeItem('auth');
  localStorage.removeItem('user');
};

const TokenService = {
  getLocalAccessToken,
  getLocalUserId,
  getUser,
  setAuth,
  setUser,
  removeUser,
};

export default TokenService;