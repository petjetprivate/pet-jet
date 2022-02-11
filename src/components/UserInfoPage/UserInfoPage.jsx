import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import './UserInfoPage.css'; 





const UserInfoPage = () => {
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

  const handleAddPetSubmit = (event) => {
    event.preventDefault();
    console.log('click **********');
      dispatch({
        type:'ADD_PET_INFO',
        payload:{
        ownerId,
        name,
        breed,
        weight,
       }
      })
    }



  return(
    <><div>
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
          <td>{user?.avail_start.split('T')[0]}</td>
          <td>{user?.avail_end.split('T')[0]}</td>
          <td>{user?.continent_origin}</td>
        </tr>
      </tbody>
    </table>
  </div>
    
    
    
    <div>
        <h2>Add User's Information</h2>
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
    {/* <div>
    <table>
      <tbody>
        <tr>
          <th>Pet's Name</th>
          <th>Breed</th>
          <th>Weight</th>
        </tr>
        <tr>
          <td>{user?.name}</td>
          <td>{user?.breed}</td>
          <td>{user?.weight}</td>
        </tr>
      </tbody>
    </table>
  </div>
     */}
    
        <div>
        <h2>Add Pet's Information</h2>
        <form onSubmit={(e)=>handleAddPetSubmit(e)}>
        <input
          class = "input"
          type="text"
          name="Name"
          required="required"
          placeholder="Enter your pet's name..."
          value={name}
          onChange={(e)=>setName(e.target.value)} />
        <input
          class = "input"
          type="text"
          name="breed"
          value={breed}
          required="required"
          placeholder="Enter your animal's breed..."
          onChange={(e)=>setBreed(e.target.value)} />
        <input
          class = "input"
          type="text"
          name="weight"
          required="required"
          value={weight}
          placeholder="Enter your animal's weight..."
          onChange={(e)=>setWeight(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
        </>
  )
  
}




export default UserInfoPage;