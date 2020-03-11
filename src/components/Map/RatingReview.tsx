import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import gql from 'graphql-tag';
import StarRatingComponent from 'react-star-rating-component';
import { X as Close } from 'react-feather';

function RatingReview(this: any, props: any) {
  if (props.validate) {
    return false;
  }

  /*  const ratingMutation = gql`
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
  `;*/
  const [rating, setRating] = useState<number>(1);
  const [popup, setRatingPopUp] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [acceptSavingEmail, setAcceptance] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [reviewError, setReviewError] = useState<string>('');
  // const [addRating] = useMutation(ratingMutation);

  // eslint-disable-next-line no-useless-escape
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const saveRatingReview = (e: any, rating: number) => {
    e.preventDefault();
    // console.log('saveRatingReview::');
    // console.log(e.target);
    // eslint-disable-next-line no-console
    console.log(rating);

    const { email, review } = e.target;
    if (email) {
      setEmailError(`${validEmailRegex.test(email.value) ? '' : 'Completeaza cu o adresa de email valida !'}`);
    }
    if (review) {
      setReviewError(
        `${
          review.value.length > 100 || review.value.length < 800 ? 'Scrie un testimonial intre 100 si 800 de caratere !' : 'cucu'
        }`
      );
    }

    // console.log(emailError);
    // console.log(reviewError);

    // addRating({
    //   variables: {
    //     provider: props.providerId,
    //     rating: value * 10,
    //     email: email,
    //     // @ts-ignore
    //     // username: email.match(/([^@]+)/g)[0],
    //     feedback: feedback,
    //   },
    // })
  };

  return (
    <div className="rating-popup" data-class={props.dataClass}>
      <button className="close-map-marker-popup" onClick={() => setRatingPopUp(false)} data-popup={popup}>
        <Close className="text-celeste" size={30} />
      </button>
      <>
        <div className="full">
          <StarRatingComponent
            name="ratei" /* name of the radio input, it is required */
            value={rating} /* number of selected icon (`0` - none, `1` - first) */
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
            saveRatingReview(e, rating);
          }}>
          <label className="block mb-3">
            Adresa ta de email nu va fi publicată. Comentariul tău va fi asociat unui numar de identificare alfanumeric.
          </label>
          <div className="block mb-6">
            <input
              type="text"
              name="email"
              placeholder="Adresa ta de email"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              className={`mb-0 ${emailError ? 'field-validation-error' : ''}`}
              title="Completeaza cu o adresa de email valida !"
            />
            {emailError && <span className="block validation-error">{emailError}</span>}
          </div>
          <div className="block mb-6">
            <textarea
              name="review"
              rows={5}
              placeholder="Lasă un testimonial despre acest serviciu social..."
              value={feedback}
              onChange={e => setFeedback(e.currentTarget.value)}
              minLength={100}
              maxLength={800}
              className={`mb-0 ${reviewError ? 'field-validation-error' : ''}`}
              title="Scrie un testimonial intre 100 si 800 de caratere !"
            />
            {reviewError && <span className="block validation-error">{reviewError}</span>}
          </div>

          <div className="terms-conditions relative block mb-10">
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
    </div>
  );
}

export default RatingReview;
