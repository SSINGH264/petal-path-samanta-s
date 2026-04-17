import { useParams } from "react-router-dom";
import {events} from "./EventMockData";

const EventDetails = () => {
  const { eventId } = useParams();

  const event = events.find((item) => item.eventId === eventId);



  return (
    <div>
      <h1>{eventId}</h1>
    </div>
  );
};

export default EventDetails;