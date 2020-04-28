import React from 'react';
import { navigate } from '@reach/router';
import { isLoggedIn } from '../utils/auth';
type Props = {
  component: any;
  path: string;
};
class PrivateRoute extends React.Component<Props, {}> {
  render() {
    // eslint-disable-next-line
    const { component: Component, ...rest } = this.props;
    if (!isLoggedIn()) {
      navigate(`/harta/login`);
      return null;
    }
    return <Component {...rest} />;
  }
}

export default PrivateRoute;
