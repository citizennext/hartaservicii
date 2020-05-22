import React, { useState } from 'react';
import { Link, navigate, useParams } from '@reach/router';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getCurrentUser, logout } from '../utils/auth';
import { Auth } from 'aws-amplify';
export function SidebarAccount() {
  const user = getCurrentUser();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  return (
    <div className="border-t border-celeste md:border-0 mt-6 xl:mt-20 pt-6">
      <NotificationContainer />
      <h4 className="mb-4">Profilul meu</h4>
      <p>
        <strong>e: </strong>
        {user?.email}
      </p>
      <p>
        <strong>t: </strong>
        {user?.phone_number}
      </p>
      <p>
        <strong>u: </strong>
        {user?.username}
      </p>
      <button
        className={`btn btn-tight w-full mt-8 ld-ext-right ${loading ? 'running' : ''}`}
        onClick={() => {
          setLoading(true);
          Auth.signOut()
            .then(() => logout())
            .then(() => {
              navigate('/harta');
              NotificationManager.success('Nu mai esti autentificat! O zi frumoasă în continuare!');
            })
            .catch((err) => NotificationManager.error(err));
        }}>
        Deconecteaza-te
        <div className="ld ld-ring ld-spin text-black"></div>
      </button>
      <br />
      <Link to={`/harta/serviciu/${params.provider}/${params.id}/administrare`} className="btn btn-tight w-full lg:w-2/3 mt-2">
        Admin Serviciu
      </Link>
    </div>
  );
}
