import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, auth } from '../firebase';
import SignUp from './signup'; // Import SignUp component
import AuthDetails from './AuthDetails'; // Import AuthDetails component
import './login.css'

const CustomAlert = ({ message }) => (
  <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}>
    {message}
  </div>
);

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidAccount, setIsValidAccount] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory

  const signInHandler = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsValidAccount(true);
      navigate('/');
    } catch (error) {
      setIsValidAccount(false);
      setShowAlert(true);
    }
  };

  return (
    <div>
      <div className='signin-container'>
        <form onSubmit={signInHandler}>
          <h1>Log In</h1>
          <input
            type='text'
            placeholder='Enter your email or username'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Log In</button>
          {showAlert && (
            <div>
              <CustomAlert message="Account doesn't exist. Would you like to " />
            </div>
          )}
        </form>
      </div>
      <div>
        {!isValidAccount && <SignUp />}
        <AuthDetails />
      </div>
    </div>
  );
};

export default SignIn;
