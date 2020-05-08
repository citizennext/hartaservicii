import React from 'react';
// @ts-ignore
import NetlifyForm from 'react-netlify-form';
import Data from '../data/global.json';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { AfterHeader } from '../components/AfterHeader';
import Footer from '../components/Footer';
import { Spinner } from '../components/Spinner';

export default function ContactPage() {
  const data = Data.page.contact.content;
  return (
    <div>
      <Seo
        isRepeatable={false}
        postTitle="Contact"
        slug="contact"
        bodyClassName="page-contact"
        summary="Așteptăm oricand sugestiile voastre pentru a îmbunătății platforma!"
      />
      <Header />
      <AfterHeader header="contact" />
      <Layout>
        <div className="wrapper">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="social-media">
                <h4>
                  Alătură-te comunității noastre de pe{' '}
                  <a href={data.social_media.facebook.url} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>{' '}
                  și{' '}
                  <a href={data.social_media.instagram.url} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </h4>
                <p>
                  Ai sugestii de îmbunătățire a platformei sau îți dorești să devii voluntar, pentru a dezvolta proiectul alături
                  de noi? Ne poți scrie oricând folosind unul dintre canalele noastre de comunicare.
                </p>
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
                {({ loading, error, success }: any) => (
                  <>
                    {loading && <Spinner />}
                    {error && <div className="text-error">Your information was not sent. Please try again later.</div>}
                    {success && (
                      <>
                        <h4 className="mt-12">Mesaj primit!</h4>
                        <p className="text-celeste">
                          Îți mulțumim pentru mesajul tău. În curând, un membru al echipei îți va răspunde!
                        </p>
                      </>
                    )}
                    {!loading && !success && (
                      <>
                        <input
                          className="w-full"
                          type={data.form.fields.email.type}
                          name={data.form.fields.email.name}
                          placeholder={data.form.fields.email.placeholder}
                        />
                        <textarea
                          className="w-full"
                          name={data.form.fields.message.name}
                          placeholder={data.form.fields.message.placeholder}
                        />
                        <button className="btn btn-celeste btn-full" type="submit">
                          {data.form.button}
                        </button>
                      </>
                    )}
                  </>
                )}
              </NetlifyForm>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
