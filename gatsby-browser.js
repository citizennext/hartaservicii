export { wrapRootElement } from './src/apollo/wrapRootElement';
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import Auth from '@aws-amplify/auth';
import { setUser } from './src/utils/auth';

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      const userInfo = {
        ...user.attributes,
        username: user.username,
        token: user.signInUserSession.idToken.jwtToken,
      };
      setUser(userInfo);
    })
    .catch((err) => {
      window.localStorage.setItem('gatsbyUser', JSON.stringify({}));
    });
};
