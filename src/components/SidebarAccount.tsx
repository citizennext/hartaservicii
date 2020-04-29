import React from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getCurrentUser, logout } from '../utils/auth';
import { Auth } from 'aws-amplify';

export function SidebarAccount() {
  const user = getCurrentUser();
  return (
    <div>
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
        className="small invert mt-8 xl:ml-0"
        onClick={() =>
          Auth.signOut()
            .then(() => logout())
            .catch((err) => NotificationManager.success(err))
        }>
        Logout
      </button>
      <Link to="/harta">
        <button className="small invert mt-4 xl:ml-0 mb-12">Harta</button>
      </Link>
    </div>
  );
}
