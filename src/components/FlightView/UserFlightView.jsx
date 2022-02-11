import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function UserFlightView() {
  const user = useSelector((store) => store.user);
}

export default UserFlightView;