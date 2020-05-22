import React from 'react';
import { Link, navigate, useParams } from '@reach/router';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getCurrentUser, logout } from '../utils/auth';
import { Auth } from 'aws-amplify';
export function SidebarAccount() {
  const user = getCurrentUser();
  const params = useParams();
  return (
    <div className="border-b border-celeste md:border-0 pb-12">
      <NotificationContainer />
      <h4 className="mt-4 xl:mt-24 mb-12">Profilul meu</h4>
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
        className="btn btn-tight w-full lg:w-1/2 mt-8"
        onClick={() =>
          Auth.signOut()
            .then(() => {
              logout();
              navigate('/harta');
            })
            .catch((err) => NotificationManager.error(err))
        }>
        Logout
      </button>
      <br />
      <Link to={`/harta/serviciu/${params.provider}/${params.id}/administrare`} className="btn btn-tight w-full lg:w-2/3 mt-4">
        Admin Serviciu
      </Link>
    </div>
  );
}
