import React from "react";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { LoaderBar } from "./utilities/commonUtils";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <ToastContainer />
      <LoaderBar />
      <PortfolioContainer />
    </div>
  );
}

export default App;
