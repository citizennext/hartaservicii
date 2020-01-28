import React from 'react';
import { Link } from 'gatsby';
import NetlifyForm from 'react-netlify-form';
import Data from '../../../data/global.json';

export function Content() {
  const data = Data.page.contact.content;
  return (
    <div className="wrapper">
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="social-media">
            <h4>{data.social_media.facebook.title}</h4>
            <Link to={data.social_media.facebook.url} className="social button">
              Comunitate
            </Link>
          </div>
          <div className="contact-support">
            <h4>{data.support.social.heading}</h4>
            <span>{data.support.social.text}</span>
            <a href={`mailto:${data.support.social.email}`}>{data.support.social.email}</a>
          </div>
          <div className="contact-support">
            <h4>{data.support.technical.heading}</h4>
            <span>{data.support.technical.text}</span>
            <a href={`mailto:${data.support.technical.email}`}>{data.support.technical.email}</a>
          </div>
        </div>
        <div className="contact-form">
          <h4>{data.form.title}</h4>
          <NetlifyForm name="contact">
            {({ loading, error, success }) => (
              <>
                {loading && <div className="text-leaf">Loading...</div>}
                {error && <div className="text-error">Your information was not sent. Please try again later.</div>}
                {success && <div className="text-celeste">Thank you for contacting us!</div>}
                {!loading && !success && (
                  <>
                    <input
                      type={data.form.fields.email.type}
                      name={data.form.fields.email.name}
                      placeholder={data.form.fields.email.placeholder}
                    />
                    <textarea name={data.form.fields.message.name} placeholder={data.form.fields.message.placeholder} />
                    <button type="submit">{data.form.button}</button>
                  </>
                )}
              </>
            )}
          </NetlifyForm>
        </div>
      </div>
    </div>
  );
}
