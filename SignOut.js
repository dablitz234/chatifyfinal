import React from 'react';
import { UserAuth } from '../../Context/AuthContext';

const SignOut = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return user ?
    <button className="sign-out" onClick={() => handleSignOut()}>Sign Out</button>
    :
    null
};

export default SignOut;