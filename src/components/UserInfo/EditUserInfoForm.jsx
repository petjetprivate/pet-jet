import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import './EditUserInfoForm.css'


const EditUserInfoForm = ({flipToggle}) => {
const editUser = useSelector((store) => store.editUser);
// const [full_name, setFullName] = useState("");
// const [email, setEmail] = useState("");
// const [phone_num, setPhone_Num] = useState("");
// const [continent_origin, setContinent_origin] = useState("");
// const [avail_start, setAvail_start] = useState("");
// const [avail_end, setAvail_end] = useState("");
// const [name, setName] = useState("");
// const [breed, setBreed] = useState("");
// const [weight, setWeight] = useState("");
const dispatch = useDispatch();
// const userId = user.id;
// const ownerId = user.id;

// console.log('new_user*************', user);

const handleAddUserInfoSubmit = (event) => {
event.preventDefault();
    // setFullName(editUser.full_name)
    // setEmail(editUser.email)
    // setPhone_Num(editUser.phone_num)
    // setAvail_start(editUser.avail_start)
    // setAvail_end(editUser.avail_end)
    // setContinent_origin(editUser.continent_origin)
    // let userId = editUser.id
  console.log('click **********');
    dispatch({
    type:'ADD_USER_INFO',
    payload:{
        full_name: editUser.full_name,
        userId: editUser.id,
        phone_num: editUser.phone_num, 
        email: editUser.email,
        avail_start: editUser.avail_start, 
        continent_origin: editUser.continent_origin,
        avail_end: editUser.avail_end,
    }
})
flipToggle()
}
const editFullName = (event) => {
    dispatch ({
        type:'EDIT_FULL_NAME' ,
        payload: event.target.value
    })
    // setFullName(editUser.full_name)
}
const editEmail = (event) => {
    dispatch ({
        type:'EDIT_EMAIL' ,
        payload: event.target.value
    })
    // setEmail(editUser.email)
}
const editPhone = (event) => {
    dispatch ({
        type:'EDIT_PHONE' ,
        payload: event.target.value
    })
    // setPhone_Num(editUser.phone_num)
}
const editAvailStart = (event) => {
    dispatch ({
        type:'EDIT_AVAIL_START' ,
        payload: event.target.value
    })
    // setAvail_start(editUser.avail_start)
}
const editAvailEnd = (event) => {
    dispatch ({
        type:'EDIT_AVAIL_END' ,
        payload: event.target.value
    })
    // setAvail_end(editUser.avail_end)
}
const editContOrg = (event) => {
    dispatch ({
        type: 'EDIT_CONTINENT_ORIGIN',
        payload: event.target.value
    })
    // setContinent_origin(editUser.continent_origin)
}



return(
    <><div>
    <h2>Update your information</h2>
    {/* <table>
    <tbody>
        <tr>
        <th>Full Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Continent of Origin </th>
        <th>Trip Start Date</th>
        <th>Trip End Date </th>
        </tr>
        {/* <tr>
        <td>{editUser?.full_name}</td>
        <td>{editUser?.email}</td>
        <td>{editUser?.phone_num}</td>
        <td>{editUser?.avail_start?.split('T')[0]}</td>
        <td>{editUser?.avail_end?.split('T')[0]}</td>
        <td>{editUser?.continent_origin}</td>
        </tr>
    </tbody>
    </table> */}
</div>
    
    
    
    <div className="userInfoForm">

        <form className="userInfoForm" onSubmit={(e)=>handleAddUserInfoSubmit(e)}>
            <label htmlFor="Name">Update name</label>
        <input
        class = "input"
        type="text"
        name="Name"
        required="required"
        placeholder="Enter your name..."
        value={editUser.full_name}
        onChange={editFullName} />
        <br/>
        <label htmlFor="email">Update email</label>
        <input
        class = "input"
        type="text"
        name="email"
        value={editUser.email}
        required="required"
        placeholder="Enter your email..."
        onChange={editEmail} />
        <br/>
        <label htmlFor="phone_num">Update Phone #</label>
        <input
        class = "input"
        type="text"
        name="phone_num"
        required="required"
        value={editUser.phone_num}
        placeholder="Enter your phone number..."
        onChange={editPhone} />
        <br/>
        <label htmlFor="continent_origin">Update Continent</label>
        <input
        class = "input"
        type="text"
        name="continent_origin"
        required="required"
        value={editUser.continent_origin}
        placeholder="Enter continent of origin..."
        onChange={editContOrg} />
        <br/>
        <label htmlFor="avail_start">Select Availability Start</label>
        <input
        class = "input"
        type="date"
        name="avail_start"
        required="required"
        value={editUser.avail_start}
        placeholder=""
        onChange={editAvailStart} />
        <br/>
        <label htmlFor="avail_end">Select Availabity End</label>
        <input
        class = "input"
        type="date"
        name="avail_end"
        required="required"
        value={editUser.avail_end}
        placeholder=""
        onChange={editAvailEnd} />
        <br/>
        <button className="btn btn_sizeSm" type="submit">SUBMIT</button>
    </form>
    </div>
        </>
)

}




export default EditUserInfoForm;