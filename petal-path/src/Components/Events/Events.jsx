import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();

  return (
    <div>
      <h1>{eventId}</h1>
    </div>
  );
};

export default EventDetails;