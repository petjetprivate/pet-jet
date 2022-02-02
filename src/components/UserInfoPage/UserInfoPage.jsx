import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";





const UserInfoPage = () => {
  const user = useSelector((store) => store.user);
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_num, setPhone_Num] = useState("");
  const [continent_origin, setContinent_origin] = useState("");
  const [avail_start, setAvail_start] = useState("11/11/1111");
  const [avail_end, setAvail_end] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const dispatch = useDispatch();
  const userId = user.id;

  console.log('new_user*************', user);

const handleAddUserInfoSubmit = (event) => {
  event.preventDefault();
  console.log('click **********');
    dispatch({
      type:'ADD_USER_INFO',
      payload:{
      userId,
      full_name,
      email,
      phone_num, 
      continent_origin,
      avail_start, 
      avail_end,
     }
    })
  }



  return(
    <><div>
        <h2>Add User's Information</h2>
        <form onSubmit={(e)=>handleAddUserInfoSubmit(e)}>
        <input
          class = "input"
          type="text"
          name="Name"
          required="required"
          placeholder="Enter your name..."
          value={full_name}
          onChange={(e)=>setName(e.target.value)} />
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
          placeholder="11/11/1111"
          onChange={(e)=>setAvail_start(e.target.value)} />
          <input
          class = "input"
          type="date"
          name="avail_end"
          required="required"
          value={avail_end}
          placeholder="11/11/1111"
          onChange={(e)=>setAvail_end(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
    <div>
    </div></>
  )
}




export default UserInfoPage;