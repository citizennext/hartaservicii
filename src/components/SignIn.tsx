import React from 'react';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import { setUser, isLoggedIn } from '../utils/auth';
import Error from './Error';
import { Auth } from 'aws-amplify';

class SignIn extends React.Component<{ path: string }, {}> {
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

  login = async () => {
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
      navigate('/harta');
    } catch (err) {
      this.setState({ error: err });
      // eslint-disable-next-line
      console.log('error...: ', err);
    }
  };

  render() {
    if (isLoggedIn()) navigate('/harta/profile');
    return (
      <div>
        <h1>Sign In</h1>
        {this.state.error && <Error errorMessage={this.state.error} />}
        <div style={styles.formContainer}>
          <input
            onChange={this.handleUpdate}
            placeholder="Username"
            name="username"
            value={this.state.username}
            style={styles.input}
          />
          <input
            onChange={this.handleUpdate}
            placeholder="Password"
            name="password"
            value={this.state.password}
            type="password"
            style={styles.input}
          />
          <div style={styles.button} onClick={this.login}>
            <span style={styles.buttonText}>Sign In</span>
          </div>
        </div>
        <Link to="/harta/signup">Sign Up</Link>
        <br />
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
    backgrounColor: 'rebeccapurple',
    padding: '15px 7px',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
  },
};

export default SignIn;
