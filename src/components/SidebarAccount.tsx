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
      <h1 className="mt-24 mb-12">Profilul meu</h1>
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
        className="small invert mt-8 ml-0"
        onClick={() =>
          Auth.signOut()
            .then(() => logout())
            .catch((err) => NotificationManager.success(err))
        }>
        Logout
      </button>
      <Link to="/harta">
        <button className="small invert mt-4 ml-0">Harta</button>
      </Link>
    </div>
  );
}
