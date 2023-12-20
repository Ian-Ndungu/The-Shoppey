import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '../firebase';
import { auth } from '../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, username)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='signin-container'>
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type='text'
          placeholder='Choose a username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
