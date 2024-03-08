import React, { useState } from "react";
import AddHistoryForm from "./AddHistoryForm";

const UserHistory = (props) => {
  const { event, date, description, _id } = props;

  const [editToggle, setEditToggle] = useState(false);

  return (
    <div>
      {!editToggle ? (
        <div className="addH-cointainer">
          <h2 className="addH-event">{event}</h2>
          <h2 className="addH-date">{date}</h2>
          <p className="addH-description">{description}</p>
          <button
            onClick={() => props.deleteUserHistory(_id)}
            className="delete-btn"
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >
            Edit
            </button>
        </div>
      ) : (
        <div>
          <AddHistoryForm event={event} description={description} date={date} _id={_id} submit={props.editUserHistoty}/>
          <button
            className="close-btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UserHistory;
