import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to Pet-Jet!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Register an account and let an admin know that you have created an account, dont forget to add your contact info as well as info on your pet(s)!
          </p>

          <p>
            After your dates have been selected, admins will wait until there is enough people within your date range before adding you to a flight group. Be sure to check your page regularly 
            to see if you've been added to a flight.
          </p>

          <p>
            Once a flight has been formed you will be contacted by your Team lead by either Phone or Email. If you are selected as a Team lead you will need to contact everyone in your leg of the flight.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
