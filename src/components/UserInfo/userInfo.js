import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Container, Grid } from '@mui/material';
import PDF from '../PDF/PdfDownload';

function UserInfo(props) {

  // const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(store => store.user)

  // const [full_name, setFullName] = useState("")

  // const [email, setEmail] = useState("")

  // const [phone, setPhone] = useState("")

  // const [avail_start, setStartDate] = useState("11/11/1111")

  // const [avail_end, setEndDate] = useState("11/11/1111")

  // const [continent_origin, setContinentOrigin] = useState("")


  // useEffect(() => {

  //   dispatch({ type: 'FETCH_ONE_USER' });


  // }, [])

  // const updateInfo = (e) => {

  //   e.preventDefault()
  //   // console.log('payload', full_name, email, phone, avail_start, avail_end, continent_origin)
  //   // dispatch({
  //   //   type: "EDIT_USER_INFO",
  //   //   id: user.id,
  //   //   payload: {
  //   //     full_name,
  //   //     email,
  //   //     phone,
  //   //     avail_start,
  //   //     avail_end,
  //   //     continent_origin

  //   dispatch({
  //     type: 'FETCH_ONE_USER'
  //   })

  // }
  
  const updateBtn  = () => {

    history.push("/userInfoPage")

  }



  return (

    <div>
      <Container className='white-container-transfer' maxWidth="xl">
        <h1>User Info</h1>
        <Grid>
          <PDF />
        </Grid>
        <div>
          <Grid>
            <table className='card'>
              <tbody>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Trip Start Date</th>
                  <th>Trip End Date </th>
                  <th>Continent of Origin </th>
                </tr>
                <tr>
                  <td>{user?.full_name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone_num}</td>
                  <td>{user?.avail_start}</td>
                  <td>{user?.avail_end}</td>
                  <td>{user?.continent_origin}</td>
                </tr>
              </tbody>
            </table>

          </Grid>
        </div>
        <Grid >

        <button className='update-btn' onClick={updateBtn}>Update Info</button>
          {/* <form onSubmit={updateInfo}>
            <div style={{ margin: 0, padding: 0 }}>
            <input className='input' value={full_name || ""} onChange={(e) => setFullName(e.target.value)} placeholder='Full Name' />
            <input className='input' value={email || ""} onChange={e => setEmail(e.target.value)} placeholder='Email' />
            <input className='input' value={phone || ""} onChange={e => setPhone(e.target.value)} placeholder='Phone' />
            <input className='input' value={avail_start || "11/11/1111"} onChange={e => setStartDate(e.target.value)} placeholder='Trip Start Date' />
            <input className='input' value={avail_end || "11/11/1111"} onChange={e => setEndDate(e.target.value)} placeholder='Trip End Date' />
            <input className='input' value={continent_origin || ""} onChange={e => setContinentOrigin(e.target.value)} placeholder='Continent of Origin' />
            </div>
            <div>
              <button className='button'>Update Information </button>
            </div>
          </form> */}
        </Grid> 
      </Container>
    </div>


  )
}

export default UserInfo;