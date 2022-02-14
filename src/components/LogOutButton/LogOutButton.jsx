import React from "react";
import { useDispatch } from "react-redux";


function LogOutButton(props) {
  const dispatch = useDispatch();
  
  const handleSignOut = () => {
    console.log('click');

    dispatch({
      type: "LOGOUT"
    })
    // swal({
    //   title: "Are you sure you want to sign out?",
    //   text: "You will lose all progress",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // }).then((willExit) => {
    //   if (willExit) {
    //     dispatch({ type: "LOGOUT" });
    //     swal("Signed out Successfully!", {
    //       icon: "success",
    //     });
    //     navigate.push("/");
    //   } else {
    //     swal("Awesome! Continue planning your trip");
    //   }
    // });
  };

  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => handleSignOut()}
    >
      Log Out
    </button>
  );
}

export default LogOutButton;
