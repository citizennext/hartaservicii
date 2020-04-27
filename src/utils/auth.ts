import { isEmpty } from 'ramda';
import { navigate } from 'gatsby';

const isBrowser = typeof window !== `undefined`;
interface User {
  sub: string;
  email_verified: boolean;
  phone_number_verified: boolean;
  phone_number: string;
  email: string;
  username: string;
}
export const setUser = (user: User | {}) => (window.localStorage.gatsbyUser = JSON.stringify(user));

const getUser = () => {
  if (window.localStorage.gatsbyUser) {
    const user: User = JSON.parse(window.localStorage.gatsbyUser);
    return user;
  }
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;
  const user = getUser();
  if (!isEmpty(user)) return true;
};

export function getCurrentUser() {
  if (!isBrowser) return;
  return getUser();
}

export const logout = () => {
  if (!isBrowser) return;
  setUser({});
  navigate('/harta');
};
