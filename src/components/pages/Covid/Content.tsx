import React from 'react';
// @ts-ignore
import NetlifyForm from 'react-netlify-form';
import { Needs } from '../../../pages/nevoijudetecovid19';

export function Content({ counties }: { counties: Needs[] }) {
  return (
    <div className="wrapper">
      <div className="section blogposts mb-40 bg-white md:mb-56 xl:max-w-griddw xl:m-auto xl:mb-64">
        <div className="section">
          {counties.map((county: Needs) => (
            <h1 key="county.id">{county.county}</h1>
          ))}
        </div>
        <div className="contact-form">
          <h4>Înscrie donație</h4>
          <NetlifyForm name="donations">
            {({ loading, error, success }: any) => (
              <>
                {loading && <div className="text-leaf">Loading...</div>}
                {error && <div className="text-error">Your information was not sent. Please try again later.</div>}
                {success && <div className="text-celeste">Thank you for donating!</div>}
                {!loading && !success && (
                  <>
                    <input type="text" name="nume" placeholder="Numele tau" />
                    <select name="tip" placeholder="Tip donator">
                      <option value="ONG">ONG</option>
                      <option value="companiePrivata">Companie Privata</option>
                      <option value="persoanaFizica">Persoana Fizica</option>
                    </select>
                    <input type="text" name="telefon" placeholder="Telefonul tau" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="details" placeholder="Detalii" />
                    <button type="submit">Trimite</button>
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
