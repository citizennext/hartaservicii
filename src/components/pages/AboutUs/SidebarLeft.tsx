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
  sidebar: Images;
};

export function SidebarLeft({ sidebar }: Props) {
  const imgProps = sidebar.images[0];
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
