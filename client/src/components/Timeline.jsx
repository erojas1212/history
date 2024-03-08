import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { HistoryContext } from "./HistoryContext";
import timeLineBG from "../images/Time-line-bg.png"

const Timeline = () => {
  const { history } = useContext(HistoryContext);
  let circleElement = { background: "#6a8ab3" };

  const timelineStyle = {
    backgroundImage: `url(${timeLineBG})`,
  };

  return (
    <div>
       <VerticalTimeline style={timelineStyle}>
        {history.map((event) => {
          return (
            <VerticalTimelineElement
              key={event._id}
              date={event.date}
              dateClassName="date"
              iconStyle={circleElement}
              className="custom-circle"
              >
              <h2>
              <Link
                className="vertical-timeline-element-title"
                to={`/HistoryDetails/${event._id}`}>
                {event.event}
                </Link>
              </h2>
              <h3 className="vertical-timeline-element-subtitle">
                {event.date}
              </h3>
              <p id="description">{event.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
