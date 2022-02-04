import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

<div id={flightEvents.id} className="">
        <form onSubmit={editFlightEvent}>
          <p>Edit Flight Event Form</p>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            className="input"
            onChange={editName}
            value={flightToEdit.name || ""}
          />
          <label htmlFor="departure">Departure</label>
          <input
            name="departure"
            className="input"
            onChange={editDepDate}
            value={flightToEdit.dep_date || ""}
          />
          <label htmlFor="return">Return</label>
          <input
            name="return"
            className="input"
            onChange={editRetDate}
            value={flightToEdit.ret_date || ""}
          />
          <label htmlFor="naLead">NA Team Lead</label>
          <input
            name="naLead"
            className="input"
            onChange={editUSTeamLead}
            value={flightToEdit.USTeamLead || ""}
          />
          <label htmlFor="euLead">EU Team Lead</label>
          <input
            name="euLead"
            className="input"
            value={flightToEdit.EUTeamLead || ""}
            onChange={editEUTeamLead}
          />
          <button type="submit">Submit</button>
        </form>
        </div>

export default EditForm;