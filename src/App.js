
import React from 'react';
import PortfolioContainer  from './PortfolioContainer/PortfolioContainer';
import { ToastContainer } from 'react-toastify';
// import { LoaderBar } from './utilities/commonUtils'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';



function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <ToastContainer />
      <PortfolioContainer />
      
    </div>
  );
}

export default App;
