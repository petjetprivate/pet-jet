import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, Grid } from "@mui/material";
import PDF from "../PDF/PdfDownload";
import Chart from "./chart";
import "./userInfo.css";
import EditUserInfoForm from "./EditUserInfoForm.jsx";
import EditPetInfoForm from "./EditPetInfo";
import AdminFlightView from "../FlightView/AdminFlightView";
import UserFlightView from "../FlightView/UserFlightView";

function UserInfo(props) {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const chart = useSelector((store) => store.setChart);
  const pets = useSelector((store) => store.petInfo);

  useEffect(() => {
    dispatch({
      type: "GET_CHARTS_INFO",
    });
  }, []);

  useEffect(() => {
    dispatch({ type: "FETCH_ONE_USER" });
    dispatch({ type: 'FETCH_PET_DATA' });
  }, []);

  const flipToggle = () => {
    setToggle(!toggle);
  };

  const flipToggle2 = () => {
    setToggle2(!toggle2);
  };

  const editBtn = (e) => {
    setToggle(!toggle);
  };

  const editBtn2 = (e) => {
    setToggle2(!toggle2);
  };

  console.log();

  return (
    <div>
      <div className="flightView">
        {user?.sec_level > 0 && <AdminFlightView className="flightView"/>}
        {user?.sec_level < 1 && <UserFlightView className="flightView"/>}
        </div>
      {/* <Container className="white-container-transfer" maxWidth="xl"> */}
        {/* <h1>Welcome To Pet Jet</h1> */}
          <PDF className="pdf"/>
        <div className="tables">
          <div>
            <table className="card">
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
                  <td>{user?.avail_start?.split("T")[0]}</td>
                  <td>{user?.avail_end?.split("T")[0]}</td>
                  <td>{user?.continent_origin}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="button" onClick={editBtn}>
            Update
          </button>
          {toggle && <EditUserInfoForm flipToggle={flipToggle} />}

          <div>
            <table className="card">
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
                      <td>{pet.weight + "lbs"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="button" onClick={editBtn2}>
            Add Pet
          </button>
          {toggle2 && <EditPetInfoForm flipToggle2={flipToggle2} />}
        </div>
        {/* <div className="flightView">
        {user?.sec_level > 0 && <AdminFlightView className="flightView"/>}
        {user?.sec_level < 1 && <UserFlightView className="flightView"/>}
        </div> */}
        <div className="chartBox">
          {!chart.isLoading && <Chart />}
        </div>
      {/* </Container> */}
    </div>
  );
}

export default UserInfo;
