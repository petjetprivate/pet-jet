import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';


function UserInfo(props) {
    
    const dispatch = useDispatch()

    const user = useSelector(store => store.user)

    const [full_name, setFullName] = useState("")

    const [email, setEmail] = useState("")

    const [phone, setPhone] = useState("")

    const [avail_start, setStartDate] = useState("11/11/1111")

    const [avail_end, setEndDate] = useState("11/11/1111")

    const [continent_origin, setContinentOrigin] = useState("")
// Discuss with group how to approach updating pet info

const updateInfo = (e) => {

    e.preventDefault()
    console.log('payload', full_name, email, phone, avail_start, avail_end, continent_origin)
    dispatch({
        type: 'EDIT_USER_INFO',
        payload: {
            id: user.id,
            full_name,
            email,
            phone,
            avail_start,
            avail_end,
            continent_origin
        }
    })
    dispatch({
        type: "FETCH_USER"
    })
    setFullName(""),
    setEmail(""),
    setPhone(""),
    setStartDate(""),
    setEndDate(""),
    setContinentOrigin("");
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
                                <td>{user?.full_name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.phone}</td>
                                <td>{user?.avail_start}</td>
                                <td>{user?.avail_end}</td>
                                <td>{user?.continent_origin}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Grid >          
                    <form onSubmit={updateInfo}>
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

                    </form>
                </Grid> 
                </Container>
        </div>
    

    )
}

export default UserInfo;