import React from 'react';
import { Link } from 'gatsby';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getCurrentUser, logout } from '../utils/auth';
import { Auth } from 'aws-amplify';
import { Button } from '../components/Buttons';
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
      <Button
        className="btn-tight mt-8"
        action={() =>
          Auth.signOut()
            .then(() => logout())
            .catch((err) => NotificationManager.success(err))
        }>
        Logout
      </Button>
      <br />
      <Link to="/harta">
        <Button className="btn-tight mt-4">Harta</Button>
      </Link>
    </div>
  );
}
