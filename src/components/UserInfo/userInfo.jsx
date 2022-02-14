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
    dispatch({ type: "FETCH_PET_DATA" });
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
    <div className="userBox">
      <div className="adminFlightView">
        {user?.sec_level > 0 && user.flight_event_id && (
          <AdminFlightView className="admin flightView" />
        )}
        {user?.sec_level < 1 && user.flight_event_id && <UserFlightView className="flightView" />}
      </div>
      <div className="middle">
      <div>
        <PDF className="pdf" />
      </div>
      <div className="chartBox">
        {!chart.isLoading && <Chart />}
      </div>
      </div>
      <div className="rightBar">
      {/* <div>
        <PDF className="pdf" />
      </div> */}
      <div className="tables">
        {/* <div> */}
        <table className="info card">
          <caption>Your Information</caption>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Availability Start</th>
              <th>Availability End</th>
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
      <button className="btn" onClick={editBtn}>
        Update User Info
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
        <button className="btn btn_sizeSm" onClick={editBtn2}>
        Add Pet
      </button>
        {/* </div> */}
        {toggle2 && <EditPetInfoForm flipToggle2={flipToggle2} />}
      </div>
      {/* <button className="button" onClick={editBtn2}>
        Add Pet
      </button> */}
      {/* {toggle2 && <EditPetInfoForm flipToggle2={flipToggle2} />} */}
      {/* </div> */}
      {/* <div className="chartBox">
          {!chart.isLoading && <Chart />}
        </div> */}
      {/* </Container> */}
    </div>
    </div>
  );
}

export default UserInfo;
