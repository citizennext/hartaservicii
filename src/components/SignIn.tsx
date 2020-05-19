import React from 'react';
import { Formik, Field, Form, FormikErrors } from 'formik';
import { isEmpty } from 'ramda';

// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { AfterHeader } from '../components/AfterHeader';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import { setUser, isLoggedIn } from '../utils/auth';
import { Auth } from 'aws-amplify';
type StateLocation = {
  state: { referrer: string; rating?: string };
};
type Values = {
  username: string;
  password: string;
};
const initialValues = {
  username: ``,
  password: ``,
};
function SignIn({ location }: { location?: StateLocation; path: string }) {
  if (isLoggedIn() && location?.state?.referrer) {
    navigate(location.state.referrer, {
      state: { rating: location?.state?.rating || 0 },
    });
  } else if (isLoggedIn() && !location) {
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
      <NotificationContainer />
      <Layout>
        <div className="wrapper">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="social-media">
                <h4>Ai deja un cont?</h4>
                <p>
                  Dacă ai deja un cont pe platformă, poți să actualizezi datele serviciilor tale după ce vei intra în contul tău.
                </p>
                <p>Dacă nu, creează unul nou și vei putea să adaugi testimoniale, să actualizezi datele care îți aparțin.</p>
              </div>
            </div>
            <div className="contact-form">
              <h4>Intră în contul tău</h4>
              <Formik
                initialValues={initialValues}
                validate={(values: Values) => {
                  const errors: FormikErrors<Values> = {};
                  if (!values.username) {
                    errors.username = 'Câmp obligatoriu';
                  }
                  if (!values.password) {
                    errors.password = 'Câmp obligatoriu';
                  }
                  return errors;
                }}
                onSubmit={async (values, actions) => {
                  const { username, password } = values;
                  actions.setSubmitting(true);
                  try {
                    await Auth.signIn(username, password);
                    const user = await Auth.currentAuthenticatedUser();
                    const userInfo = {
                      ...user.attributes,
                      username: user.username,
                      token: user.signInUserSession.idToken.jwtToken,
                    };
                    setUser(userInfo);
                    actions.setSubmitting(false);
                    navigate(location?.state?.referrer ? location.state.referrer : '/harta', {
                      state: { rating: location?.state?.rating ? location?.state?.rating : 0 },
                    });
                  } catch (err) {
                    NotificationManager.error(err.message);
                  }
                }}>
                {({ values, errors, touched, isSubmitting }) => (
                  <Form>
                    <label htmlFor="username">Utilizator*</label>
                    <div className="relative w-full">
                      <Field
                        placeholder="ex: matei123"
                        className={`w-full ${touched.username && errors.username ? 'field-validation-error' : ''}`}
                        id="username"
                        name="username"
                        required={false}
                        value={values.username}
                      />
                      {touched.username && errors.username && <span className="field-error">{errors.username}</span>}
                    </div>
                    <label htmlFor="password">Parola*</label>
                    <div className="relative w-full">
                      <Field
                        placeholder="minimum 8 caractere"
                        className={`w-full ${touched.password && errors.password ? 'field-validation-error' : ''}`}
                        id="password"
                        name="password"
                        required={false}
                        value={values.password}
                        type="password"
                      />
                      {touched.password && errors.password && <span className="field-error">{errors.password}</span>}
                    </div>

                    <button
                      className={`btn btn-celeste w-full ld-ext-left ${isSubmitting ? 'running' : ''}`}
                      type="submit"
                      disabled={!isEmpty(errors) || isSubmitting}>
                      Intră în cont
                      <div className="ld ld-ring ld-spin"></div>
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to="/harta/inregistrare" className="btn btn-celeste  w-full mt-4">
                Crează un cont
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default SignIn;
