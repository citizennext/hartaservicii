import React from 'react';
import getSlug from 'speakingurl';
import { Link } from '@reach/router';

export function Content({ providers, count }: any) {
  return (
    <div className="wrapper">
      <div className="section blogposts bg-white xl:w-4/5 xl:m-auto">
        <h2 className="text-center mb-2">Nevoi de protecție #covid19 raportate</h2>
        <h3 className="text-center mb-6 text-celeste">{`${count} servicii au publicat date până acum`}</h3>
      </div>
      <div className="section blogposts mb-20 bg-white md:grid md:grid-cols-3 md:gap-3">
        {providers?.map(({ provider }: any) => (
          <Link to={`harta/serviciu/${getSlug(provider.name)}/${provider.id}/`} key={provider.id} className="no-underline">
            <div className=" rounded p-6 bg-celeste text-black mb-3 md:mb-0">
              <strong className="ellipsis-clamp-1">{provider.name}</strong>
              <span className="text-sm">
                <strong>Localitate: </strong>
                {provider.location}
              </span>
              {' | '}
              <span className="text-sm">
                <strong>Județ: </strong> {provider.district}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
