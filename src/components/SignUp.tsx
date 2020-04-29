import React from 'react';
import { navigate } from '@reach/router';
import { Link } from 'gatsby';
import Error from './Error';
import { Auth } from 'aws-amplify';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { AfterHeader } from '../components/AfterHeader';

const initialState = {
  username: ``,
  password: ``,
  email: '',
  phone_number: '',
  authCode: '',
  stage: 0,
  error: '',
};
type StateLocation = {
  state: { referrer: string; rating?: number };
};
class SignUp extends React.Component<{ location?: StateLocation; path: string }, {}> {
  state = initialState;

  handleUpdate = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      await Auth.signUp({ username, password, attributes: { email, phone_number } });
      this.setState({ stage: 1 });
    } catch (err) {
      this.setState({ error: err });
      // eslint-disable-next-line
      console.log('error signing up...', err);
    }
  };

  confirmSignUp = async () => {
    const { username, authCode } = this.state;
    try {
      await Auth.confirmSignUp(username, authCode);
      navigate('/harta/login', {
        state: { referrer: this.props.location?.state?.referrer, rating: this.props.location?.state?.rating },
      });
    } catch (err) {
      this.setState({ error: err });
      // eslint-disable-next-line
      console.log('error confirming signing up...', err);
    }
  };

  render() {
    return (
      <div>
        <Seo
          isRepeatable={false}
          postTitle="Înregistrare"
          slug="/harta/inregistrare"
          bodyClassName="page-contact"
          summary="Crează-ți contul tău"
        />
        <Header />
        <AfterHeader header="cont nou" />
        <Layout>
          <div className="wrapper">
            <div className="contact-wrapper">
              <div className="contact-info">
                <div className="social-media">
                  <h4>Crează-ți contul tău</h4>
                  <p>
                    Ai sugestii de îmbunătățire a platformei sau îți dorești să devii voluntar, pentru a dezvolta proiectul
                    alături de noi? Ne poți scrie oricând folosind unul dintre canalele noastre de comunicare.
                  </p>
                </div>
              </div>
              <div className="contact-form">
                <h4>Crează cont</h4>
                {this.state.stage === 0 && (
                  <div>
                    {this.state.error && <Error errorMessage={this.state.error} />}
                    <input
                      onChange={this.handleUpdate}
                      placeholder="Utilizator"
                      name="username"
                      value={this.state.username}
                      style={styles.input}
                    />
                    <input
                      onChange={this.handleUpdate}
                      placeholder="Parolă"
                      name="password"
                      value={this.state.password}
                      type="password"
                      style={styles.input}
                    />
                    <input
                      onChange={this.handleUpdate}
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      style={styles.input}
                    />
                    <input
                      onChange={this.handleUpdate}
                      placeholder="Număr telefon"
                      name="phone_number"
                      value={this.state.phone_number}
                      style={styles.input}
                    />
                    <button type="submit" onClick={this.signUp}>
                      Trimite
                    </button>
                  </div>
                )}
                {this.state.stage === 1 && (
                  <div>
                    {this.state.error && <Error errorMessage={this.state.error} />}
                    <input
                      onChange={this.handleUpdate}
                      placeholder="Cod autorizare"
                      name="authCode"
                      value={this.state.authCode}
                      style={styles.input}
                    />
                    <button className="mt-4" onClick={this.confirmSignUp}>
                      Confirmă cont
                    </button>
                  </div>
                )}
                <Link
                  to="/harta/login"
                  state={{ referrer: this.props.location?.state?.referrer, rating: this.props.location?.state?.rating }}>
                  <button className="mt-4">Login</button>
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

const styles = {
  input: {
    height: 40,
    margin: '10px 0px',
    padding: 7,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'rebeccapurple',
    padding: '15px 7px',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
};

export default SignUp;
