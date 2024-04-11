import React, { useState } from 'react';

const FormFunctional = () => {
  const [email, setEmail] = useState('');

  const handleChange = (evt) => setEmail(evt.target.value);

  return (
    <div>
      <h1>You entered: {email}</h1>
      <input type='text' value={email} onChange={handleChange} />
    </div>
  );
};

export default FormFunctional;

