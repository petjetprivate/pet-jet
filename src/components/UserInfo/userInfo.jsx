import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import PDF from '../PDF/PdfDownload';
import Chart from './chart';
import './userInfo.css';
// import FlightView from '../FlightView/FlightView';
import EditUserInfoForm from "./EditUserInfoForm.jsx";
import EditPetInfoForm from './EditPetInfo';

function UserInfo(props) {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(store => store.user)
  
  // Do we have a pet reducer? Add pet input is nto functioning
  const pets = useSelector(store => store.petInfo)

  // const [full_name, setFullName] = useState("")

  // const [email, setEmail] = useState("")

  // const [phone, setPhone] = useState("")

  // const [avail_start, setStartDate] = useState("11/11/1111")

  // const [avail_end, setEndDate] = useState("11/11/1111")

  // const [continent_origin, setContinentOrigin] = useState("")


  useEffect(() => {

    dispatch({ 
      type: 'FETCH_PET_DATA',
      payload: user.id
  });

  dispatch({ 
    type: 'FETCH_USER',
});


  }, [])

  const flipToggle = () => {
    setToggle(!toggle);
  }

  const flipToggle2 = () => {
    setToggle2(!toggle2);
  }

  const editBtn = (e) => {
    // console.log("e.target.value:", e.target.value);
    setToggle(!toggle);
  };

  const editBtn2 = (e) => {
    // console.log("e.target.value:", e.target.value);
    setToggle2(!toggle2);
  };
  



  return (

    <div>
      <Container className='white-container-transfer' maxWidth="xl">
        <h1>Welcome To Pet Jet</h1>
        <Grid>
          <PDF />
        </Grid>
        <div>
          <Grid>
            <table className='card'>
              <caption>Your Information</caption>
              <tbody>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Available Start Date</th>
                  <th>Available End Date </th>
                  <th>Continent of Origin </th>
                </tr>
                <tr>
                  <td>{user?.full_name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone_num}</td>
                  <td>{user?.avail_start?.split('T')[0]}</td>
                  <td>{user?.avail_end?.split('T')[0]}</td>
                  <td>{user?.continent_origin}</td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <button className='button' onClick={editBtn}>
                    Update
                  </button>
                  {toggle && <EditUserInfoForm flipToggle={flipToggle}/>}





          <Grid>
            <table className='card'>
              <caption>Your Pet Information</caption>
              <tbody>
                <tr>
                  <th>Pet Name</th>
                  <th>Breed</th>
                  <th>Weight</th>
                </tr>
                {pets.petInfo.map((pet) => {
                        return (
                        <tr key={pet.id}>
                        <td>{pet.name}</td>
                        <td>{pet.breed}</td>
                        <td>{pet.weight + 'lbs'}</td>
                        </tr>
                    )
                }
            )}

              </tbody>
            </table>
          </Grid>
          <button className='button' onClick={editBtn2}>
                    Add Pet
                  </button>
          {toggle2 && <EditPetInfoForm flipToggle2={flipToggle2}/>}
        </div>
        {/* <div><FlightView /></div> */}
        <div>
          <Chart />
        </div>
      </Container>
    </div>


  )
}

export default UserInfo;