
import React from 'react';
import useInputState from './hooks/useInputState';

const FormHooks = () => {
  const [email, updateEmail, resetEmail] = useInputState('');
  const [password, updatePassword, resetPassword] = useInputState('');

  return (
    <div>
      <h1>Email: {email}</h1>
      <input type='text' value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Reset</button>
      <h1>Password: {password}</h1>
      <input type='text' value={password} onChange={updatePassword} />
      <button onClick={resetPassword}>Reset</button>
    </div>
  );
};

export default FormHooks;
