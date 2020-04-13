import React, { useState } from 'react';
// @ts-ignore
import NetlifyForm from 'react-netlify-form';
import { Needs } from '../../../pages/nevoijudetecovid19';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import hssLogo from '../../../assets/images/icon_HSS_symbolleaf.svg';
import { X as Close } from 'react-feather';

export function Content({ counties }: { counties: Needs[] }) {
  const [open, setOpen] = useState<string | null>(null);
  function getCounty() {
    const county = counties.find(county => county.id === open);
    if (!county) {
      return <div>hello</div>;
    }
    return (
      <div className="map-marker-popup needs">
        <header>
          <div className="popup-logo">
            <img src={hssLogo} />
          </div>
          <button className="close-map-marker-popup" onClick={() => setOpen(null)}>
            <Close className="text-celeste" size={30} />
          </button>
        </header>

        <div className="content">
          <div>
            <h1>{county.county}</h1>
          </div>
          <ul>
            <li>
              <span className="label">MASTI CHIRURGICALE (BUC)</span>
              <span className="value">{county.surgicalMasks}</span>
            </li>
            <li>
              <span className="label">MANUSI CHIRURGICALE (BUC)</span>
              <span className="value">{county.surgicalHandgloves}</span>
            </li>
            <li>
              <span className="label">DEZINFECTANT MAINI (LITRI)</span>
              <span className="value">{county.handDesinfectant}</span>
            </li>
            <li>
              <span className="label">DEZINFECTANT SUPRAFETE (LITRI)</span>
              <span className="value">{county.surfaceDesinfectant}</span>
            </li>
            <li>
              <span className="label">MASTI FILTRU FFP2-3 (BUC)</span>
              <span className="value">{county.masks}</span>
            </li>
            <li>
              <span className="label">VIZIERE PROTECTIE</span>
              <span className="value">{county.visors}</span>
            </li>
            <li>
              <span className="label">CLOR</span>
              <span className="value">{county.chlor}</span>
            </li>
            <li>
              <span className="label">COMBINEZOANE PROTECTIE</span>
              <span className="value">{county.surgicalGown}</span>
            </li>
            <li>
              <span className="label">ALCOOL SANITAR</span>
              <span className="value">{county.sanitaryAlchohol}</span>
            </li>
            <li>
              <span className="label">BOTOSI UNICA FOLOSINTA</span>
              <span className="value">{county.surgicalShoeProtection}</span>
            </li>
            <li>
              <span className="label">OCHELARI PROTECTIE</span>
              <span className="value">{county.protectionGlasses}</span>
            </li>
            <li>
              <span className="label">BONETE</span>
              <span className="value">{county.protectionHood}</span>
            </li>
            <li>
              <span className="label">HALATE UNICA FOLOSINTA</span>
              <span className="value">{county.surgicalGownSingleUse}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="section blogposts bg-white xl:w-4/5 xl:m-auto">
        <h1 className="my-10">Covid 19 - Nevoi Județe</h1>
        <p className="mb-5">
          Harta serviciilor sociale centralizează <strong>nevoile din centrele rezidențiale de la nivelul fiecărui județ</strong>{' '}
          cu scopul de a conecta grupurile și inițiativele locale cu Direcțiile Generale de Asistență Socială și Protecția
          Copilului (DGASPC) de la nivelul fiecărui județ. Datele sunt obținute de la Uniunea Națională a Consiliilor Județene din
          România pe baza solicitărilor DGASPC-urilor. Beneficiarii din centrele rezidențiale, precum și asistenții sociali au
          nevoie de echipament de protecție corespunzător în lupta cu CoVid-19, pentru a evita tragedii precum cele din Spania,
          Franța sau Italia unde virusul a cauzat numeroase decese în rândul azilelor de bătrâni.
        </p>
        <p>
          <strong>Ce poți face în mod practic</strong> este să te uiți pe harta serviciilor sociale(link) și să identifici centrul
          social cel mai apropiat de tine pe care să îl sprijini cu cele necesare. Dacă ai făcut o donație, anunță-ne și pe noi
          pentru a putea redirecționa pe cei care vor să ajute acolo unde este cea mai mare nevoie.
        </p>
      </div>
      <div className="section blogposts mb-20 bg-white">
        <h2 className="mx-auto w-1/2 my-20 text-center ">Nevoi Județe</h2>
        <div className="needs-counties">
          {counties.map((county: Needs) => (
            <div onClick={() => setOpen(county.id)} key={county.id}>
              {county.county}
            </div>
          ))}
        </div>
        <DialogOverlay
          aria-label="detalii serviciu"
          isOpen={!!open}
          onDismiss={() => setOpen(null)}
          style={{ background: 'rgba(151,133,133, 0.4)', position: 'fixed', top: 0, width: '100%', height: '100vh' }}>
          <DialogContent>{getCounty()}</DialogContent>
        </DialogOverlay>

        <div className="needs-form xl:w-1/2 xl:mx-auto mt-15">
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
