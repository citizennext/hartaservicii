import React, { useState } from 'react';
import { Formik, Field, Form, FormikErrors } from 'formik';
import StarRatingComponent from 'react-star-rating-component';
import { useParams } from '@reach/router';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { isEmpty } from 'ramda';
import Footer from '../Footer';
import Seo from '../Seo';
import Header from '../Header';
import Layout from '../Layout';
import { AfterHeader } from '../AfterHeader';
import { SidebarAccount } from '../SidebarAccount';

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
      sendEmail(message: $feedback, subject: "new review on a service", toEmails: ["contact@serviciisociale.ro"]) {
        success
      }
    }
  `;
  const [addRating, { data, loading, error }] = useMutation(ratingMutation);
  const params = useParams();
  const [successForm, setSuccessForm] = useState(false);
  const userStorage = localStorage.getItem('gatsbyUser');
  const userId = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).username;
  const token = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).token;
  const [rating, setRating] = useState<number>(props.location?.state?.rating || 0);

  return (
    <div className="rating">
      <Seo isRepeatable={false} postTitle="Testimonial" bodyClassName="page-review" summary="Lasă un testimonial" />
      <Header />
      <AfterHeader header="testimonial" />
      <Layout left={<SidebarAccount />}>
        <div className="wrapper">
          <div className="contact-wrapper">
            {!successForm && !loading ? (
              <>
                <h1 className="mt-4 xl:mt-24 mb-12">Povestește-ne experiența ta!</h1>
                <p>
                  Aceste testimoniale pot avea un impact enorm. Pot duce la soluționarea unor probleme raportate de cetățeni. Pot
                  ajuta personalul serviciului să își îmbunătățească serviciile. Pot ajuta alți oameni să ia o decizie extrem de
                  importantă.
                </p>
                <p>
                  <strong>Fi politicos, folosește un ton și un limbaj constructiv! </strong>
                </p>
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
                          provider: params.id,
                          rating: rating * 10,
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
                      <div className="md:flex bg-snow rounded-lg p-6 border border-leaf mb-4">
                        <StarRatingComponent
                          name="ratei" /* name of the radio input, it is required */
                          value={rating} /* number of selected icon (`0` - none, `1` - first) */
                          starCount={5} /* number of icons in rating, default `5` */
                          onStarClick={(value: number) => setRating(value)} /* on icon click handler */
                          onStarHover={(value: number) => setRating(value)} /* on icon hover handler */
                          renderStarIcon={() => <span>●</span>}
                          starColor="#6FBBB7"
                          emptyStarColor="transparent"
                        />
                        <div className="text-center md:text-left md:ml-20">
                          <h2 className="text-lg md:p-0">Calificativul tau</h2>
                          <div className="text-brown text-lg font-body">
                            Cunoști situația din acest centru din experiență proprie? Oferă-i un indicativ!
                          </div>
                        </div>
                      </div>
                      <Form className="md:flex flex-col">
                        <div className="block relative mb-4 xs:mb-6">
                          <Field
                            as="textarea"
                            name="feedback"
                            rows={3}
                            placeholder="Lasă un testimonial despre acest serviciu social..."
                            value={values.feedback}
                            className={`w-full mb-0 ${errors.feedback ? 'field-validation-error' : ''}`}
                          />
                          {touched.feedback && errors.feedback && (
                            <span className={`block absolute validation-error`}>{errors.feedback}</span>
                          )}
                        </div>
                        <button type="submit" className="text-white md:ml-auto md:mr-0" disabled={!isEmpty(errors) || !dirty}>
                          Trimite
                        </button>
                      </Form>
                    </>
                  )}
                </Formik>
              </>
            ) : (
              data && (
                <div className="popup-suucess">
                  <div className="full my-10">
                    <h1 className="mt-4 xl:mt-24 mb-12">Multumim pentru feedback !!!</h1>
                  </div>
                  <div className="full my-10">
                    <p>Am primit datele transmise și le vom verifica!</p>
                  </div>
                  <div className="full">
                    <p>
                      <strong>Calificativ:</strong> {data.insert_provider_rating.returning[0].rating / 10} / 5
                    </p>
                    <p>
                      <strong>Nume:</strong> {data.insert_provider_rating.returning[0].user.username}
                    </p>
                    <p>
                      <strong>Feedback:</strong> {data.insert_provider_rating.returning[0].feedback}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default RatingReview;
