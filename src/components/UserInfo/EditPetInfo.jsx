import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";


const EditPetInfoForm = ({flipToggle2}) => {
const user = useSelector((store) => store.user);

const [name, setName] = useState("");
const [breed, setBreed] = useState("");
const [weight, setWeight] = useState("");
const dispatch = useDispatch();

const ownerId = user.id;

const handleAddPetSubmit = () => {
    dispatch({
        type:'ADD_PET_INFO',
        payload:{
        ownerId,
        name,
        breed,
        weight,
    }
    })
    flipToggle2()
    // dispatch({
    //     type:'FETCH_PET_DATA',
    //     payload: user.id
    // })

}



return(
    <>
        <div>
        <h2>Add Pet's Information</h2>
        <form onSubmit={()=>handleAddPetSubmit()}>
            <label htmlFor="Name">Enter Pet Name</label>
        <input
        className = "input"
        type="text"
        name="Name"
        required="required"
        placeholder="Enter your pet's name..."
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="breed">Enter Pet Breed</label>
        <input
        className = "input"
        type="text"
        name="breed"
        value={breed}
        required="required"
        placeholder="Enter your animal's breed..."
        onChange={(e)=>setBreed(e.target.value)} />
        <label htmlFor="weight">Enter Pet Weight in Pounds</label>
        <input
        className = "input"
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




export default EditPetInfoForm;