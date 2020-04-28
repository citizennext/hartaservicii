import React from 'react';
import { Link } from 'gatsby';
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
            .then(() => logout())
            .catch((err) => NotificationManager.success(err))
        }>
        Logout
      </button>
      <Link to="/harta">Home</Link>
    </div>
  );
};

export default UserProfile;
