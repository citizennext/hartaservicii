import React from 'react';

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
  const imgProps = typeof sidebar !== 'boolean' ? sidebar?.images : null;
  return (
    <>
      {imgProps?.map((image: Image) => (
        <a href={image.href} title={image.alt} style={{ marginBottom: 20 }} key={image.url} className="hover:bg-white">
          <img src={image.url} alt={image.alt} width="200" />
        </a>
      ))}
    </>
  );
}
