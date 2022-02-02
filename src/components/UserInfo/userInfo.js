import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';


function UserInfo(props) {
    
    const dispatch = useDispatch()

    const user = useSelector(store => store.editUser)

    // const [full_name, setFullName] = useState("")

    // const [email, setEmail] = useState("")

    // const [phone, setPhone] = useState("")

    // const [avail_start, setStartDate] = useState("11/11/1111")

    // const [avail_end, setEndDate] = useState("11/11/1111")

    // const [continent_origin, setContinentOrigin] = useState("")
    // const [change,setChange] = useState(false)

useEffect(()=>{
    console.log('user',user)
    // dispatch({
    //     type: 'FETCH_USER'
    // });
    dispatch({
        type: 'SET_USER_TO_EDIT'
    });
    
    },[])

    const editFullName = (e) => {
        console.log("edit user full name:", e.target.value);
   
        dispatch({
          type: 'EDIT_FULL_NAME',
          payload: e.target.value,
        });
      };

      const editEmail = (e) => {
        console.log("edit user email:", e.target.value);
   
        dispatch({
          type: 'EDIT_EMAIL',
          payload: e.target.value,
        });
      };

      const editPhone = (e) => {
        console.log("edit user phone:", e.target.value);
   
        dispatch({
          type: 'EDIT_PHONE',
          payload: e.target.value,
        });
      };

      const editAvailStart = (e) => {
        console.log("edit user Available Start:", e.target.value);
   
        dispatch({
          type: 'EDIT_AVAIL_START',
          payload: e.target.value,
        });
      };

      const editAvailEnd = (e) => {
        console.log("edit user Available End:", e.target.value);
   
        dispatch({
          type: 'EDIT_AVAIL_END',
          payload: e.target.value,
        });
      };

      const editCountryOrigin = (e) => {
        console.log("edit user Country of Origin:", e.target.value);
   
        dispatch({
          type: 'EDIT_CONTINENT_ORIGIN',
          payload: e.target.value,
        });
      };

const updateInfo = () => {

    // e.preventDefault()
    dispatch({
        type: 'EDIT_USER_INFO',
        payload: {
            id: user.id,
            full_name: user.full_name,
           email: user.email,
            phone: user.phone,
            avail_start: user.avail_start,
            avail_end: user.avail_end,
            continent_origin: user.continent_origin
        }
    });

    dispatch({
        type: 'FETCH_USER'
    });

    // setFullName(""),
    // setEmail(""),
    // setPhone(""),
    // setStartDate(""),
    // setEndDate(""),
    // setContinentOrigin("");
    // setChange(prev=>!prev)
}


    return (

        <div>
            <Container className='white-container-transfer' maxWidth="xl">
                <div>
                        <p>User Info</p>
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
                                <td>{user.full_name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.avail_start}</td>
                                <td>{user.avail_end}</td>
                                <td>{user.continent_origin}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Grid >          
                    <form onSubmit={()=> updateInfo()}>
                        <div style={{ margin: 0, padding: 0 }}>
                            <input className='input' value={user.full_name || ""} onChange={editFullName} placeholder='Full Name' />
                            <input className='input' value={user.email || ""} onChange={editEmail} placeholder='Email' />
                            <input className='input' value={user.phone || ""} onChange={editPhone} placeholder='Phone' />
                            <input className='input' value={user.avail_start || "11/11/1111"} type="Date" onChange={editAvailStart} placeholder='Trip Start Date' />
                            <input className='input' value={user.avail_end || "11/11/1111"} type="Date" onChange={editAvailEnd} placeholder='Trip End Date' />
                            <input className='input' value={user.continent_origin || ""} onChange={editCountryOrigin} placeholder='Country of Origin' />
                        </div>

                        <div>

                            <button className='button'>Update Information </button>
                        </div>

                    </form>
                </Grid> 
                </Container>
        </div>
    

    )
}

export default UserInfo;