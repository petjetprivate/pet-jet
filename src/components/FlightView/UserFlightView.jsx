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
      <ul>
        {lead.map((one) => {
          return (
            <li key={one.id}>{one.username}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default UserFlightView;
