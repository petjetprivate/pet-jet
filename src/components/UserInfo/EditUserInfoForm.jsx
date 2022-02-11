import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";


const EditUserInfoForm = () => {
const user = useSelector((store) => store.user);
const [full_name, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone_num, setPhone_Num] = useState("");
const [continent_origin, setContinent_origin] = useState("");
const [avail_start, setAvail_start] = useState("11/11/1111");
const [avail_end, setAvail_end] = useState("");
const [name, setName] = useState("");
const [breed, setBreed] = useState("");
const [weight, setWeight] = useState("");
const dispatch = useDispatch();
const userId = user.id;
const ownerId = user.id;

console.log('new_user*************', user);

const handleAddUserInfoSubmit = (event) => {
event.preventDefault();
  console.log('click **********');
    dispatch({
    type:'ADD_USER_INFO',
    payload:{
        full_name,
        userId,
        phone_num, 
        email,
        avail_start, 
        continent_origin,
        avail_end,
    }
})
}



return(
    <><div>
    <h2>Update your information</h2>
    <table>
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
        <td>{user?.avail_start?.split('T')[0]}</td>
        <td>{user?.avail_end?.split('T')[0]}</td>
        <td>{user?.continent_origin}</td>
        </tr>
    </tbody>
    </table>
</div>
    
    
    
    <div>

        <form onSubmit={(e)=>handleAddUserInfoSubmit(e)}>
        <input
        class = "input"
        type="text"
        name="Name"
        required="required"
        placeholder="Enter your name..."
        value={full_name}
        onChange={(e)=>setFullName(e.target.value)} />
        <input
        class = "input"
        type="text"
        name="email"
        value={email}
        required="required"
        placeholder="Enter your email..."
        onChange={(e)=>setEmail(e.target.value)} />
        <input
        class = "input"
        type="text"
        name="phone_num"
        required="required"
        value={phone_num}
        placeholder="Enter your phone number..."
        onChange={(e)=>setPhone_Num(e.target.value)} />
        <input
        class = "input"
        type="text"
        name="continent_origin"
        required="required"
        value={continent_origin}
        placeholder="Enter continent of origin..."
        onChange={(e)=>setContinent_origin(e.target.value)} />
        <input
        class = "input"
        type="date"
        name="avail_start"
        required="required"
        value={avail_start}
        placeholder=""
        onChange={(e)=>setAvail_start(e.target.value)} />
        <input
        class = "input"
        type="date"
        name="avail_end"
        required="required"
        value={avail_end}
        placeholder=""
        onChange={(e)=>setAvail_end(e.target.value)} />
        <button type="submit">Add</button>
    </form>
    </div>
        </>
)

}




export default EditUserInfoForm;