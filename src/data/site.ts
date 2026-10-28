// Ported from the legacy src/data/global.json (COVID-19 navigation removed).
export const SITE = {
  lang: 'ro',
  title: 'Harta serviciilor sociale',
  description: 'Bine ai venit în Harta serviciilor sociale',
  image: '/cover.jpg',
  fbAppId: '230938941312776',
  twitter: 'citizennextro',
  facebookUrl: 'https://www.facebook.com/hartaserviciilorsociale',
  instagramUrl: 'https://www.instagram.com/hartaserviciilorsociale/',
  contactEmail: 'contact@serviciisociale.ro',
  gtmId: 'GTM-KNQ9RQZ',
  facebookPixelId: '226417208680464',
} as const;

export interface NavItem {
  label: string;
  url: string;
}

export const NAVIGATION: readonly NavItem[] = [
  { label: 'Harta', url: '/harta' },
  { label: 'Căutare', url: '/cautare' },
  { label: 'Despre noi', url: '/despre-noi' },
  { label: 'Noutăți', url: '/noutati' },
  { label: 'Parteneri', url: '/parteneri' },
  { label: 'Statistici', url: '/statistici' },
  { label: 'Contact', url: '/contact' },
];

export const FOOTER = {
  copyright: 'Asociația Citizen Next — toate drepturile rezervate ©',
  links: {
    asociatia: { title: 'Asociația Citizen Next', url: 'https://citizennext.ro/contribute' },
    sis: { title: 'Social Innovation Solutions', url: 'https://www.socialinnovationsolutions.org' },
  },
} as const;

export const HOMEPAGE = {
  title: 'Îngrijim și suntem îngrijiți mai bine',
  intro: '...când ne cunoaștem drepturile, modalitățile de acces la servicii și localizarea acestora.',
  introLink: { url: '/noutati/ingrijim-si-suntem-ingrijiti-mai-bine', label: 'detalii' },
  mapLink: { url: '/harta', label: 'Deschide harta' },
  providers: {
    title: 'Ești furnizor de servicii sociale?',
    items: [
      'Caută serviciul pe care îl oferi pe hartă.',
      'Dacă nu apare sau apare dar vrei să modifici datele, dă-ne de știre.',
      'Vezi ce alte servicii sunt în zona ta.',
    ],
  },
  beneficiaries: {
    title: 'Ești beneficiar sau însoțitor?',
    items: [
      'Caută serviciul de care ai nevoie în zona ta.',
      'Poți să filtrezi după tipul de serviciu oferit, localizare, privat sau public.',
      'Găsești nu doar date de contact dar și locația exactă.',
    ],
  },
} as const;
