import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setFullName] = useState('');
  const [continent_origin, setContinentOrigin] = useState('');
  const [admPass, setAdmPass] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  
  let sec_level = ''
  const adminCheck = () => {
    if (admPass === '1234'){
      sec_level = 2
    }else if (admPass === ''){
      sec_level = 0
    }else {
      alert('remove text from Admin Password')
    }
  }

  const registerUser = (event) => {
    event.preventDefault();
    adminCheck()

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        continent_origin: continent_origin,
        full_name: full_name,
        sec_level: sec_level,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="full_name">
          Full Name:
          <input
            type="text"
            name="full_name"
            value={full_name}
            required
            onChange={(event) => setFullName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="admPass">
          Admin Password:
          <input
            type="admPass"
            name="admPass"
            value={admPass}
            onChange={(event) => setAdmPass(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="continent">
          Continent of Origin
          <input
            type="text"
            name="continent_origin"
            value={continent_origin}
            required
            onChange={(event) => setContinentOrigin(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
