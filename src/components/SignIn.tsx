import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { AfterHeader } from '../components/AfterHeader';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import { setUser, isLoggedIn } from '../utils/auth';
import Error from './Error';
import { Auth } from 'aws-amplify';
type StateLocation = {
  state: { referrer: string; rating?: string };
};
class SignIn extends React.Component<{ location?: StateLocation; path: string }, {}> {
  state = {
    username: ``,
    password: ``,
    error: ``,
  };

  handleUpdate = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  login = async (e: any) => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      await Auth.signIn(username, password);
      const user = await Auth.currentAuthenticatedUser();
      const userInfo = {
        ...user.attributes,
        username: user.username,
        token: user.signInUserSession.idToken.jwtToken,
      };
      setUser(userInfo);

      navigate(this.props.location?.state ? this.props.location.state.referrer : '/harta', {
        state: { rating: this.props.location?.state ? this.props.location?.state?.rating : 0 },
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    if (isLoggedIn() && this.props.location?.state?.referrer) {
      navigate(this.props.location.state.referrer, {
        state: { rating: this.props.location?.state.rating },
      });
    } else if (isLoggedIn() && !this.props.location) {
      navigate('/harta');
    }

    return (
      <div>
        <Seo
          isRepeatable={false}
          postTitle="Login"
          slug="/harta/login"
          bodyClassName="page-contact"
          summary="Intră în contul tău"
        />
        <Header />
        <AfterHeader header="login" />
        <Layout>
          <div className="wrapper">
            <div className="contact-wrapper">
              <div className="contact-info">
                <div className="social-media">
                  <h4>Ai deja un cont?</h4>
                  <p>
                    Dacă ai deja un cont pe platformă, poți să actualizezi datele serviciilor tale după ce vei intra în contul
                    tău.
                  </p>
                  <p>Dacă nu, crează unul nou și vei putea să adaugi testimoniale, să actualizezi datele care îți aparțin.</p>
                </div>
              </div>
              <div className="contact-form">
                <h4>Intră în contul tău</h4>
                <form onSubmit={this.login}>
                  {this.state.error && <Error errorMessage={this.state.error} />}
                  <input onChange={this.handleUpdate} placeholder="Username" name="username" value={this.state.username} />
                  <input
                    onChange={this.handleUpdate}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    type="password"
                  />
                  <button type="submit">Trimite</button>
                </form>
                <Link to="/harta/inregistrare">
                  <button className="mt-4">Crează un cont</button>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
