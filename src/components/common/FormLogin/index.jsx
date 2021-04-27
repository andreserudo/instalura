import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
import { handleLogin } from '../../../services/Login';
// const STATES = {
//   DEFAULT: 'DEFAULT',
//   LOADING: 'LOADING',
//   ERROR: 'ERROR',
//   SUCCESS: 'SUCCESS',
// };

function FormLogin() {
  // const [formState, setFormState] = useState(STATES.DEFAULT);
  const [infoLogin, setInfoLogin] = useState({
    email: '',
    password: '',
  });
  const { email, password } = infoLogin;
  const router = useRouter();

  const handleChange = (event, type) => {
    const { value } = event.target;
    setInfoLogin({ ...infoLogin, [type]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await handleLogin(infoLogin);
    if (!result) {
      //  console.log('Deu ruim!');
    }
    router.push('/app/profile');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={(event) => handleChange(event, 'email')} />
      <input type="text" value={password} onChange={(event) => handleChange(event, 'password')} />
      <button type="submit">Logar</button>
    </form>

  );
}

export default FormLogin;
