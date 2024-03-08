import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Timeline from "./components/Timeline.jsx";
import "./styles.css";
import HistoryDetails from "./components/HistoryDetails.jsx";
import HttpMethods from "./components/HttpMethods.jsx"

function App() {

  return (
   <Router>
    <div className="nav-bar">
    <Link className="timeLine-link" to="/"> Time Line </Link>
    <Link className="userHistory-link" to="/HttpMethods"> Add History</Link>
    </div>

    <Routes>
      <Route className="timeLine"path='/' element={<Timeline />}/>
      <Route path="/HistoryDetails/:eventId" element={<HistoryDetails />} />
      <Route path="/HttpMethods" element={<HttpMethods />}/>
    </Routes>
   </Router>
  );
}

export default App;
