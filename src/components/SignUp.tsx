import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Formik, Field, Form, FormikErrors } from 'formik';
import Select, { components } from 'react-select';
import { isEmpty } from 'ramda';
import { groupedPhoneCodes } from '../utils/groupedCountries';

// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link } from 'gatsby';
import { Auth } from 'aws-amplify';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { AfterHeader } from '../components/AfterHeader';
type SignUpValues = {
  username: string;
  name: string;
  password: string;
  email: string;
  dialCode: { label: string; value: string } | string;
  phone_number: string;
};
const initialValues = {
  username: ``,
  name: '',
  password: ``,
  email: '',
  dialCode: { label: 'România', value: '+40' },
  phone_number: '',
};
type StateLocation = {
  state: { referrer: string; rating?: number };
};
const customStyles = {
  container: (styles: any) => ({
    ...styles,
    width: '33.3333%',
    height: '45px',
  }),
  control: (styles: any) => ({
    ...styles,
    backgroundColor: '#EDF7EF',
    // border: 'none',
    borderRadius: '0.5rem',
    height: '45px',
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    height: '45px',
  }),

  singleValue: (styles: any) => ({ ...styles, right: 10 }),
  menu: (styles: any) => ({
    ...styles,
    width: '333px',
  }),
};

const formatGroupLabel = (data: any) => (
  <div className="flex items-center justify-between">
    <span>{data.label}</span>
    <span className="bg-leaf rounded-md text-black text-sm py-1 px-2 text-center">{data.options.length}</span>
  </div>
);
const SingleValue = (props: any) => <components.SingleValue {...props}>{props.data.value}</components.SingleValue>;
function SignUp({ location }: { location?: StateLocation; path: string }) {
  const [stage, setStage] = useState(0);
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
      <NotificationContainer />

      <Layout>
        <div className="wrapper">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="social-media">
                <h4>Creează-ți contul tău</h4>
                <p>
                  Dacă ești un <strong>reprezentant al unui furnizor de servicii sociale</strong>, creându-ți un cont vei putea să
                  actualizezi datele tale de pe platformă și să adaugi ce nevoi au serviciile tale.
                </p>
                <p>
                  Dacă ești un <strong>beneficiar de servicii sociale</strong>, creându-ți un cont vei putea să oferi un
                  calificativ serviciului social de care ai beneficiat și să scrii un testimonial cu experiența ta.
                </p>
              </div>
            </div>
            <div className="contact-form">
              <h4>Creează cont</h4>
              {stage === 0 && (
                <Formik
                  initialValues={initialValues}
                  validate={(values: SignUpValues) => {
                    const errors: FormikErrors<SignUpValues> = {};
                    if (!values.username) {
                      errors.username = 'Câmp obligatoriu';
                    }
                    if (!values.email) {
                      errors.email = 'Câmp obligatoriu';
                    } else if (!values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i)) {
                      errors.email = 'Email incorect';
                    }
                    if (!values.password) {
                      errors.password = 'Câmp obligatoriu';
                    } else if (values.password.length < 8) {
                      errors.password = 'Minim 8 caractere';
                    }
                    if (!values.phone_number) {
                      errors.phone_number = 'Câmp obligatoriu';
                    } else if (!values.phone_number.match(/^[0-9]+$/)) {
                      errors.phone_number = 'Sunt permise doar cifre';
                    }
                    if (!values.dialCode) {
                      errors.dialCode = 'Câmp obligatoriu';
                    }
                    return errors;
                  }}
                  onSubmit={async (values, actions) => {
                    localStorage.setItem('gatsbyUserTemp', values.username);
                    actions.setSubmitting(true);
                    try {
                      await Auth.signUp({
                        username: values.username,
                        password: values.password,
                        attributes: { email: values.email, phone_number: values.dialCode.value + values.phone_number },
                      });
                      actions.setSubmitting(false);
                      setStage(1);
                      NotificationManager.success('Codul de validare a fost trimis');
                    } catch (err) {
                      if (err.code === 'UsernameExistsException') {
                        NotificationManager.error(err.message);
                      }
                    }
                  }}>
                  {({ values, errors, touched, isSubmitting, setFieldValue }) => (
                    <Form>
                      <label htmlFor="username">Nume utilizator (fara spatii)*</label>
                      <div className="relative w-full">
                        <Field
                          onChange={(e: any) => {
                            setFieldValue('username', e.target.value.replace(' ', '').toLowerCase());
                          }}
                          placeholder="ex: matei123"
                          className={`w-full ${touched.username && errors.username ? 'field-validation-error' : ''}`}
                          name="username"
                          id="username"
                          required={false}
                          value={values.username}
                        />
                        {touched.username && errors.username && <span className="field-error">{errors.username}</span>}
                      </div>
                      <label htmlFor="name">Nume Prenume</label>
                      <div className="relative w-full">
                        <Field
                          placeholder="ex: Matei Cojocaru"
                          className={`w-full ${touched.name && errors.name ? 'field-validation-error' : ''}`}
                          name="name"
                          id="name"
                          required={false}
                          value={values.name}
                        />
                        {touched.name && errors.name && <span className="field-error">{errors.name}</span>}
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
                      <label htmlFor="email">Email*</label>
                      <div className="relative w-full">
                        <Field
                          placeholder="office@asociatie.ro"
                          className={`w-full ${touched.email && errors.email ? 'field-validation-error' : ''}`}
                          name="email"
                          id="email"
                          required={false}
                          value={values.email}
                        />
                        {touched.email && errors.email && <span className="field-error">{errors.email}</span>}
                      </div>
                      <label htmlFor="phone">Telefon*</label>
                      <div className="flex flex-row w-full">
                        <Field name="dialCode">
                          {({ field, form }: any) => (
                            <>
                              <Select
                                {...field}
                                options={groupedPhoneCodes}
                                formatGroupLabel={formatGroupLabel}
                                placeholder="Prefix"
                                onChange={(val) => setFieldValue('dialCode', val)}
                                components={{ SingleValue }}
                                styles={customStyles}
                              />
                              {form.errors.dialCode && form.touched.dialCode && (
                                <span className="field-error">{errors.email}</span>
                              )}
                            </>
                          )}
                        </Field>
                        <div className="relative ml-2 w-2/3">
                          <Field
                            id="phone"
                            className={`w-full ${touched.phone_number && errors.phone_number ? 'field-validation-error' : ''}`}
                            placeholder="726000000"
                            name="phone_number"
                            required={false}
                            value={values.phone_number}
                          />
                          {touched.phone_number && errors.phone_number && (
                            <span className="field-error">{errors.phone_number}</span>
                          )}
                        </div>
                      </div>
                      <button
                        className={`btn btn-celeste w-full ld-ext-left ${isSubmitting ? 'running' : ''}`}
                        type="submit"
                        disabled={!isEmpty(errors) || isSubmitting}>
                        Creează cont nou
                        <div className="ld ld-ring ld-spin"></div>
                      </button>
                    </Form>
                  )}
                </Formik>
              )}
              {stage === 1 && (
                <Formik
                  initialValues={{ authCode: '' }}
                  validate={(values: { authCode: string }) => {
                    const errors: FormikErrors<{ authCode: string }> = {};

                    if (!values.authCode) {
                      errors.authCode = 'Camp obligatoriu';
                    } else if (!values.authCode.match(/^[0-9]+$/)) {
                      errors.authCode = 'Caractere valide sunt doar cifre';
                    }
                    if (values.authCode.length !== 6) {
                      errors.authCode = 'Codul contine 6 cifre';
                    }
                    return errors;
                  }}
                  onSubmit={async (values) => {
                    const userStorage = localStorage.getItem('gatsbyUserTemp');
                    const userId = userStorage ? userStorage : '';
                    try {
                      await Auth.confirmSignUp(userId, values.authCode, { forceAliasCreation: false });
                      localStorage.removeItem('gatsbyUserTemp');
                      navigate('/harta/login', {
                        state: { referrer: location?.state?.referrer, rating: location?.state?.rating },
                      });
                    } catch (err) {
                      if (err.code === 'CodeMismatchException') {
                        NotificationManager.error('Codul introdus este incorect');
                      }
                    }
                  }}>
                  {({ values, errors, touched, isSubmitting }) => (
                    <Form>
                      <p>Un cod de verificare a fost trimis pe emailul din pasul anterior!</p>

                      <Field
                        placeholder="Cod autorizare"
                        name="authCode"
                        required={true}
                        value={values.authCode}
                        className="w-full"
                      />
                      {touched.authCode && errors.authCode && (
                        <span className={`block absolute validation-error`}>{errors.authCode}</span>
                      )}
                      <button
                        className={`btn btn-celeste w-full ld-ext-left ${isSubmitting ? 'running' : ''}`}
                        type="submit"
                        disabled={!isEmpty(errors) || isSubmitting}>
                        Confirmă contul
                        <div className="ld ld-ring ld-spin"></div>
                      </button>
                    </Form>
                  )}
                </Formik>
              )}
              <Link
                to="/harta/login"
                state={{ referrer: location?.state?.referrer, rating: location?.state?.rating }}
                className="btn btn-celeste w-full mt-4">
                Login
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default SignUp;
