import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const HistoryContext = createContext();
const HistoryProvider = (props) => {
  const [history, setHistory] = useState([]);

  const getHistory = () => {
    axios
      .get("/api/history")
      .then((res) => setHistory(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getHistory();
  }, []);

  const contextValue = {
    history,
    getHistory,
  };

  return (
    <HistoryContext.Provider value={contextValue}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export { HistoryContext, HistoryProvider };
