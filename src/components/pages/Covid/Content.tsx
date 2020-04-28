import React, { useState } from 'react';
// @ts-ignore
import NetlifyForm from 'react-netlify-form';
import { Needs } from '../../../pages/nevoijudetecovid19';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import hssLogo from '../../../assets/images/icon_HSS_symbolleaf.svg';
import { X as Close } from 'react-feather';
import { formatNumber } from '../../../utils';
export function Content({ counties }: { counties: Needs[] }) {
  const [open, setOpen] = useState<string | null>(null);
  function getCounty() {
    const county = counties.find((county) => county.id === open);
    if (!county) {
      return <div>...</div>;
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
            <h1 className="text-celeste">{county.county}</h1>
          </div>
          <ul>
            <li>
              <span className="text-brown">MASTI CHIRURGICALE (BUC)</span>
              <span className="font-semibold">{formatNumber(county.surgicalMasks)}</span>
            </li>
            <li>
              <span className="text-brown">MANUSI CHIRURGICALE (BUC)</span>
              <span className="font-semibold">{formatNumber(county.surgicalHandgloves)}</span>
            </li>
            <li>
              <span className="text-brown">DEZINFECTANT MAINI (LITRI)</span>
              <span className="font-semibold">{formatNumber(county.handDesinfectant)}</span>
            </li>
            <li>
              <span className="text-brown">DEZINFECTANT SUPRAFETE (LITRI)</span>
              <span className="font-semibold">{formatNumber(county.surfaceDesinfectant)}</span>
            </li>
            <li>
              <span className="text-brown">MASTI FILTRU FFP2-3 (BUC)</span>
              <span className="font-semibold">{formatNumber(county.masks)}</span>
            </li>
            <li>
              <span className="text-brown">VIZIERE PROTECTIE</span>
              <span className="font-semibold">{formatNumber(county.visors)}</span>
            </li>
            <li>
              <span className="text-brown">CLOR</span>
              <span className="font-semibold">{formatNumber(county.chlor)}</span>
            </li>
            <li>
              <span className="text-brown">COMBINEZOANE PROTECTIE</span>
              <span className="font-semibold">{formatNumber(county.surgicalGown)}</span>
            </li>
            <li>
              <span className="text-brown">ALCOOL SANITAR</span>
              <span className="font-semibold">{formatNumber(county.sanitaryAlchohol)}</span>
            </li>
            <li>
              <span className="text-brown">BOTOSI UNICA FOLOSINTA</span>
              <span className="font-semibold">{formatNumber(county.surgicalShoeProtection)}</span>
            </li>
            <li>
              <span className="text-brown">OCHELARI PROTECTIE</span>
              <span className="font-semibold">{formatNumber(county.protectionGlasses)}</span>
            </li>
            <li>
              <span className="text-brown">BONETE</span>
              <span className="font-semibold">{formatNumber(county.protectionHood)}</span>
            </li>
            <li>
              <span className="text-brown">HALATE UNICA FOLOSINTA</span>
              <span className="font-semibold">{formatNumber(county.surgicalGownSingleUse)}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="section blogposts bg-white xl:w-4/5 xl:m-auto">
        <h1 className="mt-10 mb-5">Covid 19 - Nevoi Județe</h1>
        <p className="mb-5">
          Harta serviciilor sociale centralizează <strong>nevoile din centrele rezidențiale de la nivelul fiecărui județ</strong>{' '}
          cu scopul de a conecta grupurile și inițiativele locale cu Direcțiile Generale de Asistență Socială și Protecția
          Copilului (DGASPC) de la nivelul fiecărui județ. Datele sunt obținute de la Uniunea Națională a Consiliilor Județene din
          România pe baza solicitărilor DGASPC-urilor. Beneficiarii din centrele rezidențiale, precum și asistenții sociali au
          nevoie de echipament de protecție corespunzător în lupta cu CoVid-19, pentru a evita tragedii precum cele din Spania,
          Franța sau Italia unde virusul a cauzat numeroase decese în rândul azilelor de bătrâni.
        </p>
        <p>
          <strong>Ce poți face în mod practic</strong> este să te uiți pe harta serviciilor sociale și să identifici centrul
          social cel mai apropiat de tine pe care să îl sprijini cu cele necesare. Dacă ai făcut o donație, anunță-ne și pe noi
          pentru a putea redirecționa pe cei care vor să ajute acolo unde este cea mai mare nevoie.
        </p>
        <p>
          Pentru donații către centrele de bătrâni vă rugăm să vă alăturați campaniei
          <a
            href="https://www.facebook.com/donate/3254515761248340/10159092302869672/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 'bold', padding: '0 8px' }}>
            Împreună pentru bunicii noștri
          </a>
          inițiată de Marius Manole, MagiCAMP și Romanian United Fund.
        </p>
      </div>
      <div className="section blogposts mb-20 bg-white">
        <h2 className="mx-auto w-1/2 mt-20 mb-10 text-center text-brown">Nevoi Județe</h2>
        <div className="needs-counties">
          {counties.map((county: Needs) => (
            <div onClick={() => setOpen(county.id)} key={county.id} className="text-celeste text-base pb-2">
              {county.county}
            </div>
          ))}
        </div>
        <DialogOverlay
          aria-text-brown="detalii serviciu"
          isOpen={!!open}
          onDismiss={() => setOpen(null)}
          style={{ background: 'rgba(151,133,133, 0.4)', position: 'fixed', top: 0, width: '100%', height: '100vh' }}>
          <DialogContent>{getCounty()}</DialogContent>
        </DialogOverlay>

        <div className="needs-form md:w-1/2 md:mx-auto mt-20">
          <h2 className="text-brown text-center mb-5">Înscrie donație</h2>
          <NetlifyForm name="donations">
            {({ loading, error, success }: any) => (
              <>
                {loading && <div className="text-leaf">Formularul tău se trimite!</div>}
                {error && <div className="text-error">Formularul nu a fost trimis. Încearcă mai târziu!</div>}
                {success && <div className="text-celeste">Mulțumim pentru suportul tău! Împreună mergem mai departe!</div>}
                {!loading && !success && (
                  <>
                    <input type="text" name="nume" placeholder="Numele tau*" required />
                    <select name="tip" placeholder="Tip donator*">
                      <option font-semibold="ONG">ONG</option>
                      <option font-semibold="companiePrivata">Companie Privata</option>
                      <option font-semibold="persoanaFizica">Persoana Fizica</option>
                    </select>
                    <input type="text" name="telefon" placeholder="Telefonul tau" />
                    <input type="email" name="email" placeholder="Email*" required />
                    <textarea name="details" placeholder="Detalii*" required />
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
