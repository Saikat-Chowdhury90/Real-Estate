import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import RealEstate from './components/RealEstate/RealEstate';

function App() {
  return (
    <div className="App">
        {/* <Router>
          
        <Routes>
          
          <Route exact path="/" element={HomePage} />
         
          <Route path="/realestate" element={RealEstate} />
            
     
        
        </Routes>
      </Router> */}
      {/* <HomePage/> */}
      <RealEstate/>      
    </div>
  );
}

export default App;
