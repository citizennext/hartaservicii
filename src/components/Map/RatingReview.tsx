import React, { useState } from 'react';
import { Formik, Field, Form, FormikErrors } from 'formik';
import StarRatingComponent from 'react-star-rating-component';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';
import { useMutation } from '@apollo/react-hooks';
import { X as Close } from 'react-feather';
import gql from 'graphql-tag';
import { isEmpty } from 'ramda';

interface Values {
  username: string;
  email: string;
  feedback: string;
  acceptance: boolean;
}
const initialValues: Values = {
  username: '',
  email: '',
  feedback: '',
  acceptance: false,
};
function RatingReview(props: any) {
  const ratingMutation = gql`
    mutation AddRating($provider: uuid!, $rating: Int!, $email: String!, $feedback: String!, $username: String!) {
      insert_provider_rating(
        objects: {
          provider_id: $provider
          rating: $rating
          user: {
            on_conflict: { constraint: users_email_key, update_columns: [email] }
            data: { email: $email, username: $username, id: $username }
          }
          feedback: $feedback
        }
      ) {
        returning {
          feedback
          rating
          user {
            email
            username
          }
        }
      }
    }
  `;

  // eslint-disable-next-line
  const [addRating, { data, loading, error }] = useMutation(ratingMutation);
  const [successForm, setSuccessForm] = useState(false);
  return (
    <div className="rating-popup" data-class={props.dataClass}>
      <button className="close-map-marker-popup" onClick={() => props.setRatingPopUp(false)}>
        <Close className="text-celeste" size={30} />
      </button>
      <Tabs>
        <TabList>
          <Tab>Adauga testimonial</Tab> <Tab>Testimoniale</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {!successForm && !loading ? (
              <Formik
                initialValues={initialValues}
                validate={(values) => {
                  const errors: FormikErrors<Values> = {};
                  if (!values.username) {
                    errors.username = 'Câmp obligatoriu';
                  }
                  if (!values.email) {
                    errors.email = 'Câmp obligatoriu';
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Adresă de email invalidă';
                  }
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
                        email: values.email,
                        username: values.username,
                        feedback: values.feedback,
                      },
                      context: {
                        headers: { 'x-hasura-user-email': values.email },
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
                      <label className="hidden md:block mb-3">
                        Adresa ta de email nu va fi publicată. Comentariul tău va fi asociat numelui.
                      </label>
                      <div className="block relative mb-4">
                        <Field
                          type="text"
                          name="username"
                          placeholder="Utilizator: de ex.: cetatean1"
                          value={values.username}
                          className={`mb-0 ${errors.username ? 'field-validation-error' : ''}`}
                        />
                        {touched.username && errors.username && (
                          <span className={`block absolute validation-error`}>{errors.username}</span>
                        )}
                      </div>
                      <div className="block relative mb-6">
                        <Field
                          type="text"
                          name="email"
                          placeholder="Adresa ta de email"
                          value={values.email}
                          className={`mb-0 ${errors.email ? 'field-validation-error' : ''}`}
                        />
                        {touched.email && errors.email && (
                          <span className={`block absolute validation-error`}>{errors.email}</span>
                        )}
                      </div>
                      <div className="block relative mb-4 xs:mb-6">
                        <Field
                          as="textarea"
                          name="feedback"
                          rows={5}
                          placeholder="Lasă un testimonial despre acest serviciu social..."
                          value={values.feedback}
                          className={`mb-0 ${errors.feedback ? 'field-validation-error' : ''}`}
                        />
                        {touched.feedback && errors.feedback && (
                          <span className={`block absolute validation-error`}>{errors.feedback}</span>
                        )}
                      </div>

                      <div className="terms-conditions relative block mb-4 sm:mb-10 lg:mb-6 xl:mb-10">
                        <Field
                          type="checkbox"
                          id="rating-review-msg"
                          className="absolute"
                          name="acceptance"
                          checked={values.acceptance}
                        />
                        <label htmlFor="rating-review-msg" className="ml-6">
                          Accept salvarea adresei de email si a testimonialului
                        </label>
                      </div>
                      <button type="submit" className="text-white" disabled={!values.acceptance || !isEmpty(errors) || !dirty}>
                        Salveaza
                      </button>
                    </Form>
                  </>
                )}
              </Formik>
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
