import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Pet Jet</h2>
      </Link>

      {user.id &&
        <h1 className="h1">Hi {user.full_name}!</h1>
      }  

      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
          {user.sec_level === 1 || user.sec_level === 0 &&
            <>
            <Link className="navLink" to="/UserInfo">
              User Info
            </Link>
            </>
            }
            {user.sec_level === 2 &&
            <>
            <Link className="navLink" to="/flight_event">
            Flight Event
            </Link>

            <Link className="navLink" to="/people_picker">
            People Picker

            </Link>
            </>
            }
            <LogOutButton className="navLink" />
          </>
        )}

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
