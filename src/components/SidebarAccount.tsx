import React from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getCurrentUser, logout } from '../utils/auth';
import { Auth } from 'aws-amplify';
export function SidebarAccount() {
  const user = getCurrentUser();
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
        className="btn btn-tight w-1/2 mt-8"
        onClick={() =>
          Auth.signOut()
            .then(() => logout())
            .catch((err) => NotificationManager.success(err))
        }>
        Logout
      </button>
      <br />
      <Link to="/harta" className="btn btn-tight w-1/2 mt-4">
        Harta
      </Link>
    </div>
  );
}
