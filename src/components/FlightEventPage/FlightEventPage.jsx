import react, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function FlightEventPage() {
  const dispatch = useDispatch();
  const flightEvents = useSelector((store) => store.setFlightEvents)

  useEffect (() => {
    dispatch ({ type: "GET_FLIGHT_EVENTS"});
  }, [])

  return (
    <div className="container">
      <p>Flight Event Page</p>
      <ul>
        {flightEvents.map((event) => {
          return <li key={event.id}>
            <p>{event.name}</p>
          </li>
        })}
      </ul>
    </div>
  );
}

export default FlightEventPage;