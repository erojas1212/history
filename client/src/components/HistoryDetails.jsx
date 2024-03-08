import React, { useContext } from "react";
import { useParams } from "react-router-dom"
import { HistoryContext } from "./HistoryContext";

const HistoryDetails = () => {
  const { eventId } = useParams();
  const { history } = useContext(HistoryContext);

  const event = history.find((event) => event._id === eventId)

  return (
    <div className="history-details-cointainer">
      <h2 className="history-details-title">History Event Details</h2>
        <div>
            <h1 className="history-details-event">{event.event}</h1>
            <h2 className="history-details-date">{event.date}</h2>
            <h3 className="history-details-description">{event.longerDescription}</h3>
        </div>
    </div>
  );
};

export default HistoryDetails;
