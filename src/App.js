import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./pages/homepage";
import Nav from "./components/nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import InfoPage from "./pages/infopage";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/show/:ID" element=<InfoPage /> />

    </Routes>
  </Router>


}
export default App;
