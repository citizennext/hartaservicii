import React, { useState } from 'react';
import { Formik, Field, Form, FormikErrors } from 'formik';
import StarRatingComponent from 'react-star-rating-component';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import '@reach/tabs/styles.css';
import { useMutation } from '@apollo/react-hooks';
import { X as Close } from 'react-feather';
import gql from 'graphql-tag';
import { isEmpty } from 'ramda';

interface Values {
  feedback: string;
}
const initialValues: Values = {
  feedback: '',
};
function RatingReview(props: any) {
  const ratingMutation = gql`
    mutation AddRating($provider: uuid!, $rating: Int!, $feedback: String!) {
      insert_provider_rating(objects: { provider_id: $provider, rating: $rating, feedback: $feedback }) {
        returning {
          feedback
          rating
          user {
            username
          }
        }
      }
    }
  `;
  // eslint-disable-next-line
  const [addRating, { data, loading, error }] = useMutation(ratingMutation);
  const [successForm, setSuccessForm] = useState(false);
  const userStorage = localStorage.getItem('gatsbyUser');
  const userId = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).username;
  const token = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).token;

  return (
    <div className="rating" data-class={props.dataClass}>
      <button className="close-map-marker-popup" onClick={() => props.setRatingPopUp(false)}>
        <Close className="text-celeste" size={30} />
      </button>
      <Tabs>
        <TabList className="tabs">
          <Tab>Adauga testimonial</Tab> <Tab>Testimoniale</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {!successForm && !loading ? (
              <AmplifyAuthenticator initialAuthState="signup">
                <AmplifySignUp
                  headerText="Crează-ti un cont"
                  slot="sign-up"
                  submitButtonText="Trimite"
                  formFields={[
                    { type: 'username', label: 'Utilizator', placeholder: 'alege un nume de utilizator', required: true },
                    { type: 'email', label: 'Email', placeholder: 'adresă de email validă', required: true },
                    { type: 'password', label: 'Parolă', placeholder: 'alege o parolă puternica', required: true },
                    { type: 'phone_number', label: 'Telefon', placeholder: 'numar fara 0 in fata', required: true },
                  ]}></AmplifySignUp>
                <Formik
                  initialValues={initialValues}
                  validate={(values) => {
                    const errors: FormikErrors<Values> = {};
                    if (!values.feedback) {
                      errors.feedback = 'Câmp obligatoriu';
                    }
                    if (values.feedback.length < 100 || values.feedback.length > 800) {
                      errors.feedback =
                        'Vă rugăm să ne spuneți mai multe detalii despre serviciul evaluat! Scrieți un testimonial intre 100 si 800 de caratere!';
                    }
                    return errors;
                  }}
                  onSubmit={async (values, actions) => {
                    try {
                      addRating({
                        variables: {
                          provider: props.providerId,
                          rating: props.rating * 10,
                          feedback: values.feedback,
                        },
                        context: {
                          headers: {
                            'x-hasura-user-id': userId,
                            'x-hasura-role': 'user',
                            Authorization: `Bearer ${token}`,
                          },
                        },
                      });
                      !loading && !error && setSuccessForm(true);
                      if (error) {
                        // eslint-disable-next-line
                        console.info(error.message);
                      }
                    } catch (err) {
                      // eslint-disable-next-line
                      console.info(err.message);
                    }
                    actions.resetForm({ values: initialValues, errors: {}, touched: {} });
                  }}>
                  {({ values, errors, dirty, touched }) => (
                    <>
                      <div className="full">
                        <StarRatingComponent
                          name="ratei" /* name of the radio input, it is required */
                          value={props.rating} /* number of selected icon (`0` - none, `1` - first) */
                          starCount={5} /* number of icons in rating, default `5` */
                          // onStarClick={(value: number) => setRating(value)} /* on icon click handler */
                          onStarHover={(value: number) => props.setRating(value)} /* on icon hover handler */
                          renderStarIcon={() => <span>●</span>}
                          starColor="#6FBBB7"
                          emptyStarColor="transparent"
                        />
                      </div>
                      <Form>
                        <div className="block relative mb-4 xs:mb-6">
                          <Field
                            as="textarea"
                            name="feedback"
                            rows={3}
                            placeholder="Lasă un testimonial despre acest serviciu social..."
                            value={values.feedback}
                            className={`mb-0 ${errors.feedback ? 'field-validation-error' : ''}`}
                          />
                          {touched.feedback && errors.feedback && (
                            <span className={`block absolute validation-error`}>{errors.feedback}</span>
                          )}
                        </div>
                        <button type="submit" className="text-white" disabled={!isEmpty(errors) || !dirty}>
                          Salveaza
                        </button>
                      </Form>
                    </>
                  )}
                </Formik>
              </AmplifyAuthenticator>
            ) : (
              data && (
                <div className="popup-suucess">
                  <div className="full my-10">
                    <p className="message message-success">Multumim pentru feedback !!!</p>
                  </div>
                  <div className="full my-10">
                    <p className="message message-success">Am primit datele transmise și le vom verifica!</p>
                  </div>
                  <div className="full">
                    <StarRatingComponent
                      name="ratei" /* name of the radio input, it is required */
                      value={
                        data.insert_provider_rating.returning[0].rating / 10
                      } /* number of selected icon (`0` - none, `1` - first) */
                      starCount={5} /* number of icons in rating, default `5` */
                      // onStarClick={(value: number) => setRating(value)} /* on icon click handler */
                      renderStarIcon={() => <span>●</span>}
                      starColor="#6FBBB7"
                      emptyStarColor="transparent"
                    />
                  </div>
                  <div className="full">
                    <p>
                      <strong>Nume:</strong> {data.insert_provider_rating.returning[0].user.username}
                    </p>
                    <p>
                      <strong>Email:</strong> {data.insert_provider_rating.returning[0].user.email}
                    </p>
                    <p>
                      <strong>Feedback:</strong> {data.insert_provider_rating.returning[0].feedback}
                    </p>
                  </div>
                </div>
              )
            )}
          </TabPanel>
          <TabPanel>Comentarii</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default RatingReview;
