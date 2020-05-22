import React from 'react';
import { Link } from '@reach/router';
export function Claim() {
  return (
    <div className="p-6 bg-burg bg-opacity-25 rounded-lg w-2/3">
      <h1 className="text-4xl font-light text-celeste">Acest serviciu a fost deja revendicat!</h1>
      <p className="text-xl">
        Încercăm să validăm fiecare utilizator înainte de a publica datele publicate. Dacă crezi că s-a întâmplat o eroare,
        scrie-ne un email.
      </p>
      <Link to="/contact" className="btn btn-outline mt-6 sm:w-1/2 m-auto">
        Contactează-ne
      </Link>
    </div>
  );
}
