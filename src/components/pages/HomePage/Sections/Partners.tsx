import React from 'react';
import { Link } from 'gatsby';
import tla from '../../../../assets/images/logo-tla.png';
import mmu from '../../../../assets/images/min-muncii.jpg';
import Pin from '../../../../assets/images/icon_pin_full.svg';
import LogoF from '../../../../assets/images/icon_HSS_symbol.svg';
import ArrowB from '../../../../assets/images/icon_arrowb.svg';

function Partners() {
  return (
    <div id="section5" className="section blogposts bg-white xl:max-w-gridd xl:m-auto xl:px-8 xl:pt-16">
      <div className="md:flex">
        <div className="md:w-1/2 md:px-4 px-4">
          <h3 className="border-b-8 border-leaf pl-4 wide md:pl-0 xl:pl-24">Istoric Proiect</h3>
          <div className="flex pt-10 xl:pl-24">
            <img style={{ width: '32px', marginRight: '36px' }} src={Pin} alt="Pin Icon" />
            <img style={{ width: '26px', marginRight: '36px' }} src={ArrowB} alt="Arrow Icon" />
            <img style={{ width: '34px' }} src={LogoF} alt="Logo Icon" />
          </div>
          <p className="pt-10 xl:pl-24">
            Harta Serviciilor Sociale este o inițiativă începută în anul 2016 de către GovITHub și Ministerul Muncii, și care în
            scurt timp a dezvoltat și lansat atunci un prototip al platformei, generând o atenție deosebită: peste 10.000 de
            utilizatori în prima lună de la lansare.
          </p>
          <p className="pt-2 pb-10 xl:pl-24">Acest interes stă la baza motivației de a continua proiectul.</p>
          <Link to={`/noutati/harta-serviciilor-sociale-din-romania-proiect-finalist-in-programul-tara-lui-andrei`}>
            <button className="btn btn-tight xl:ml-24">detalii</button>
          </Link>
        </div>
        <div className="mt-12 md:w-1/2 md:px-4 px-4 md:mt-0">
          <h3 className="border-b-8 border-leaf pl-4 wide md:pl-0 xl:pl-24">Parteneri</h3>
          <img className="mt-10 xl:ml-24 h-xl float-left" src={tla} alt="RO SMART în Țara lui Andrei" />
          <img className="mt-10 xl:pl-12 xs:pl-4 h-xl" src={mmu} alt="Ministerul Muncii și Protecției Sociale" />
          <p className="pt-10 xl:pl-24">
            Harta Serviciilor Sociale din România este unul din câștigătorii competiției RO SMART în Țara lui Andrei, un program
            de responsabilitate socială derulat de OMV Romania.
          </p>
          <p className="pt-2 pb-10 xl:pl-24">
            Ministerul Muncii și Protecției Sociale este partenerul instituțional al proiectului, facilitând îmbunătățirea
            platformei și furnizând datele necesare.
          </p>
          <Link to={`/parteneri`} style={{ textDecoration: 'none' }}>
            <button className="btn btn-tight xl:ml-24">detalii</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Partners;
