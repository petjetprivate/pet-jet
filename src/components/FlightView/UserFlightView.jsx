import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import setTeamLead from "../../redux/reducers/teamLead.reducer";

function UserFlightView() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const lead = useSelector((store) => store.setTeamLead);
  console.log('lead:', lead);
  useEffect(() => {
    dispatch({
      type: "GET_TEAM_LEAD",
    });
  }, []);

  return (
    <div>
      <h1>YOUR TEAM LEAD</h1>
        {lead.map((one) => {
          return (
            <ul key={one.id}>
            <li>{one.username}</li>
            <li>Phone: {one.phone_num}</li>
            <li>Email: {one.email}</li>
            </ul>
          )
        })}
    </div>
  );
}

export default UserFlightView;
