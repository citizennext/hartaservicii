import React from 'react';
import { Link } from 'gatsby';

type Image = {
  href: string;
  url: string;
  alt: string;
};

type Images = {
  images: [Image];
};

type Props = {
  sidebar?: Images | boolean;
};

export function SidebarLeft({ sidebar }: Props) {
  const imgProps = typeof sidebar !== 'boolean' ? sidebar?.images[0] : null;
  return (
    <>
      {imgProps && (
        <Link to={imgProps.href} title={imgProps.alt}>
          <img src={imgProps.url} alt={imgProps.alt} />
        </Link>
      )}
    </>
  );
}
