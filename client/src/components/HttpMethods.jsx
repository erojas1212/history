import React, { useState, useEffect } from "react";
import axios from "axios";
import UserHistory from "./UserHistory";
import AddHistoryForm from "./AddHistoryForm";

const HttpMethods = () => {
  const [userHistory, setUserHistory] = useState([]);

  const getUserHistory = () => {
    axios
      .get("/userHistory")
      .then((res) => setUserHistory(res.data))
      .catch((err) => console.log(err));
  };

  const addUserHistory = (newUserH) => {
    axios
      .post("/userHistory", newUserH)
      .then((res) => {
        setUserHistory((prevUserH) => [...prevUserH, res.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteUserHistory = (userHID) => {
    axios
      .delete(`/userHistory/${userHID}`)
      .then((res) => {
        setUserHistory((prevUserH) =>
          prevUserH.filter((userHistory) => userHistory._id !== userHID)
        );
      })
      .catch((err) => console.log(err));
  };

  const editUserHistoty = (updatedData, userHID) => {
    axios
      .put(`/userHistory/${userHID}`, updatedData)
      .then((res) => {
        setUserHistory((prevUserH) =>
          prevUserH.map((userHistory) =>
            userHistory._id !== userHID ? userHistory : res.data)
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserHistory();
  }, []);

  return (
    <div className="user-added-history-cointainer">
      <h1 className="add-History-title"> Add History</h1>
      <AddHistoryForm submit={addUserHistory} />
      {userHistory.map((historyItem) => (
        <UserHistory
          {...historyItem}
          key={historyItem.event}
          deleteUserHistory={deleteUserHistory}
          editUserHistoty={editUserHistoty}
        />
      ))}
    </div>
  );
};

export default HttpMethods;
