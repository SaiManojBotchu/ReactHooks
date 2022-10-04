import React, { useState } from 'react';

const FormHooks = () => {
  const [email, setEmail] = useState('');
  return (
    <div>
      <h1>You entered: {email}</h1>
      <input type='text' value={email} onChange={(evt) => setEmail(evt.target.value)} />
    </div>
  );
};

export default FormHooks;
