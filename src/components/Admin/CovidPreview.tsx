import React from 'react';
import { useParams, Link } from '@reach/router';

export interface CovidList {
  surgicalMasks: string;
  surgicalHandgloves: string;
  handDesinfectant: string;
  surfaceDesinfectant: string;
  masks: string;
  visors: string;
  chlor: string;
  surgicalGown: string;
  sanitaryAlchohol: string;
  protectionGlasses: string;
  surgicalShoeProtection: string;
  protectionHood: string;
  surgicalGownSingleUse: string;
}
export function CovidPreview({
  surgicalMasks,
  surgicalHandgloves,
  handDesinfectant,
  surfaceDesinfectant,
  masks,
  visors,
  chlor,
  surgicalGown,
  sanitaryAlchohol,
  protectionGlasses,
  surgicalShoeProtection,
  protectionHood,
  surgicalGownSingleUse,
}: CovidList) {
  const params = useParams();
  return (
    <div className="popup-success">
      <div className="full my-10">
        <h1 className="mt-4 xl:mt-24 mb-12">Multumim pentru completarea formularului !!!</h1>
      </div>
      <div className="full my-10">
        <p>Am primit datele transmise și vă vom contacta pentru confirmarea identității dumneavoastră.</p>
      </div>
      <div className="full">
        <h4>Nevoi semnalate</h4>
        <table className="table-auto mt-12">
          <thead>
            <tr className="bg-celeste">
              <th className="text-left  px-4 py-2">Nevoi</th>
              <th className="px-4 py-2 text-center">Cantitate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-t border-celeste border-dotted px-4 py-2">Măști chirurgicale (buc):</td>
              <td className="border-b border-t border-celeste border-dotted px-4 py-2 text-center">{surgicalMasks || '-'}</td>
            </tr>
            <tr className="bg-snow">
              <td className="border-b border-celeste border-dotted px-4 py-2">Mănuși chirurgicale (buc):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{surgicalHandgloves || '-'}</td>
            </tr>
            <tr>
              <td className="border-b border-celeste border-dotted px-4 py-2">Dezinfectant mâini (litri):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{handDesinfectant || '-'}</td>
            </tr>
            <tr className="bg-snow">
              <td className="border-b border-celeste border-dotted px-4 py-2">Dezinfectant suprafețe (litri):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{surfaceDesinfectant || '-'}</td>
            </tr>
            <tr>
              <td className="border-b border-celeste border-dotted px-4 py-2">Măști filtru FFP2-3 (buc):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{masks || '-'}</td>
            </tr>
            <tr className="bg-snow">
              <td className="border-b border-celeste border-dotted px-4 py-2">Viziere protecție (buc):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{visors || '-'}</td>
            </tr>
            <tr>
              <td className="border-b border-celeste border-dotted px-4 py-2">Clor (litri):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{chlor || '-'}</td>
            </tr>
            <tr className="bg-snow">
              <td className="border-b border-celeste border-dotted px-4 py-2">Combinezoane protecție (buc):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{surgicalGown || '-'}</td>
            </tr>
            <tr>
              <td className="border-b border-celeste border-dotted px-4 py-2">Alcohol sanitar (litri):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{sanitaryAlchohol || '-'}</td>
            </tr>
            <tr className="bg-snow">
              <td className="border-b border-celeste border-dotted px-4 py-2">Botoși unică folosință (buc):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{protectionGlasses || '-'}</td>
            </tr>
            <tr>
              <td className="border-b border-celeste border-dotted px-4 py-2">Ochelari protecție (buc):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{surgicalShoeProtection || '-'}</td>
            </tr>
            <tr className="bg-snow">
              <td className="border-b border-celeste border-dotted px-4 py-2">Bonete (buc):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{protectionHood || '-'}</td>
            </tr>
            <tr>
              <td className="border-b border-celeste border-dotted px-4 py-2">Halate unică folosință (buc):</td>
              <td className="border-b border-celeste border-dotted px-4 py-2 text-center">{surgicalGownSingleUse || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link
        className="btn btn-celeste ml-auto md:w-1/2 mt-6"
        to={`/harta/serviciu/${params.provider}/${params.id}/administrare/`}>
        Înapoi la pagina de administrare
      </Link>
    </div>
  );
}
