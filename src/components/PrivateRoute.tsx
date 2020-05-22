import React from 'react';
import { navigate } from '@reach/router';
import { isLoggedIn } from '../utils/auth';
type Props = {
  component: any;
  uri?: string;
  path: string;
  location?: { state: { rating?: number } };
};
class PrivateRoute extends React.Component<Props> {
  render() {
    // eslint-disable-next-line
    const { component: Component, uri, ...rest } = this.props;
    if (!isLoggedIn()) {
      navigate(`/harta/inregistrare`, { state: { referrer: uri, rating: this.props.location?.state?.rating || 0 } });
      return null;
    }
    return <Component {...rest} />;
  }
}

export default PrivateRoute;
