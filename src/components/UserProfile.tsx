import React from 'react';
import { Link, navigate } from 'gatsby';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getCurrentUser, logout } from '../utils/auth';
import { Auth } from 'aws-amplify';

const UserProfile = () => {
  const user = getCurrentUser();
  return (
    <div>
      <NotificationContainer />
      <h1>Profile Details</h1>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone_number}</p>
      <p>Username: {user?.username}</p>
      <button
        onClick={() =>
          Auth.signOut()
            .then(() => {
              logout();
              navigate('/harta');
              NotificationManager.success('V-ați delogat cu succes!');
            })
            .catch((err) => NotificationManager.error(err))
        }>
        Logout
      </button>
      <Link to="/harta">Home</Link>
    </div>
  );
};

export default UserProfile;
