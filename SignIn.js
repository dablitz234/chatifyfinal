import React from 'react';
import { UserAuth } from '../../Context/AuthContext';

const SignIn = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <button className="sign-in" onClick={handleGoogleSignIn}>Sign in with Google</button>
    </>
  )
};

export default SignIn;