import React, {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { useMutation } from '@apollo/react-hooks';
import {X as Close} from 'react-feather';
import gql from 'graphql-tag';

function RatingReview(props: any) {
  if (!props.validate) {
    return false;
  }

  const ratingMutation = gql`
      mutation AddRating($provider: uuid!, $rating: Int!, $email: String!, $feedback: String!, $username: String!) {
          insert_provider_rating(
              objects: {
                  provider_id: $provider
                  rating: $rating
                  user: { data: { email: $email, username: $username, id: $username } }
                  feedback: $feedback
              }
          ) {
              returning {
                  id
              }
          }
      }
  `;
  const minReviewChar = 100;
  const [rating, setRating] = useState<number>(0);
  const [popup, setRatingPopUp] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [acceptSavingEmail, setAcceptance] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('-');
  const [reviewError, setReviewError] = useState<string>('-');
  const [successForm, setFormValidation] = useState<boolean>(false);
  const [addRating] = useMutation(ratingMutation);

  // eslint-disable-next-line no-useless-escape
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const fieldValidation = (target: any) => {
    const {email, review} = target;
    if (email) {
      setEmailError(`${validEmailRegex.test(email.value) ? '' : 'Completeaza cu o adresa de email valida !'}`);
    }
    if (review) {
      setReviewError(`${review.value.length < minReviewChar ? 'Scrie un testimonial intre 100 si 800 de caratere !' : ''}`);
    }
  };

  const handleChanged = (e: any) => {
    const {name, value} = e.target;
    if (name === 'email') {
      setEmail(e.currentTarget.value);
      setEmailError(`${validEmailRegex.test(value) ? '' : 'Completeaza cu o adresa de email valida !'}`);
    }
    if (name === 'review') {
      setFeedback(e.currentTarget.value)
      setReviewError(`${value.length < minReviewChar ? 'Scrie un testimonial intre 100 si 800 de caratere !' : ''}`);
    }
  }

  const saveRatingReview = (e: any) => {
    e.preventDefault();

    fieldValidation(e.target);
    if (!emailError && !reviewError) {
      addRating({
        variables: {
          provider: props.providerId,
          rating: onRating() * 10,
          email: email,
          username: email,
          feedback: feedback,
        },
      })
      setFormValidation(true);
    }
  };

  const onRating = () => {
    return rating === 0 ? props.rating : rating;
  }

  const popupValidation = () => {
    return popup ? props.validate : popup;
  }

  return (
    <>
      {popupValidation() &&
      <div className="rating-popup" data-class={props.dataClass}>
        <button className="close-map-marker-popup" onClick={() => setRatingPopUp(false)} data-popup={popup}>
          <Close className="text-celeste" size={30}/>
        </button>
        {!successForm ?
          <>
            <div className="full">
              <StarRatingComponent
                name="ratei" /* name of the radio input, it is required */
                value={onRating()} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                // onStarClick={(value: number) => setRating(value)} /* on icon click handler */
                onStarHover={(value: number) => setRating(value)} /* on icon hover handler */
                renderStarIcon={() => <span>●</span>}
                starColor="#6FBBB7"
                emptyStarColor="transparent"
              />
            </div>
            <form
              name="rating-review"
              action="#"
              onSubmit={e => {
                saveRatingReview(e);
              }}
            >
              <label className="hidden md:block mb-3">
                Adresa ta de email nu va fi publicată. Comentariul tău va fi asociat unui numar de identificare
                alfanumeric.
              </label>
              <div className="block relative mb-6">
                <input
                  type="text"
                  name="email"
                  placeholder="Adresa ta de email"
                  value={email}
                  onChange={e => handleChanged(e)}
                  onBlur={e => handleChanged(e)}
                  className={`mb-0 ${emailError && emailError !== '-' ? 'field-validation-error' : ''}`}
                  title="Completeaza cu o adresa de email valida !"
                />
                {emailError && emailError !== '-' &&
                <span className="block absolute border-error bg-white validation-error">{emailError}</span>}
              </div>
              <div className="block relative mb-4 xs:mb-6">
                <textarea
                  name="review"
                  rows={5}
                  placeholder="Lasă un testimonial despre acest serviciu social..."
                  value={feedback}
                  onChange={e => handleChanged(e)}
                  onBlur={e => handleChanged(e)}
                  minLength={minReviewChar}
                  maxLength={800}
                  className={`mb-0 ${reviewError && reviewError !== '-' ? 'field-validation-error' : ''}`}
                  title="Scrie un testimonial intre 100 si 800 de caratere !"
                />
                {reviewError && reviewError !== '-' && <span className="validation-error">{reviewError}</span>}
              </div>

              <div className="terms-conditions relative block mb-4 sm:mb-10 lg:mb-6 xl:mb-10">
                <input
                  type="checkbox"
                  id="rating-review-msg"
                  className="absolute"
                  checked={acceptSavingEmail}
                  onChange={() => setAcceptance(!acceptSavingEmail)}
                />
                <label htmlFor="rating-review-msg" className="ml-6">
                  Accept salvarea adresei de email si a testimonialului
                </label>
              </div>
              <button type="submit" className="text-white" disabled={!acceptSavingEmail}>
                Salveaza
              </button>
            </form>
          </>
          :
          <div className="popup-suucess">
            <div className="full my-10">
              <p className="message message-success">Multumim pentru feedback !!!</p>
            </div>
            <div className="full">
              <StarRatingComponent
                name="ratei" /* name of the radio input, it is required */
                value={onRating()} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                // onStarClick={(value: number) => setRating(value)} /* on icon click handler */
                renderStarIcon={() => <span>●</span>}
                starColor="#6FBBB7"
                emptyStarColor="transparent"
              />
            </div>
            <div className="full">
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Feedback:</strong> {feedback}</p>
            </div>
          </div>
        }
      </div>
      }
    </>
  );
}

export default RatingReview;
