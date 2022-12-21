import loginImage from './loginimage.png';
import './App.css';
import Register from './Register';
import NavBar from './Navabar';
import Home from './Home';
import Feedback from './Feedback';
import Cuisine from './CuisineItem';
import Individual from './IndividualOrder';
import Description from './Description';
import TotalToKitchen from './TotalToKitchen';
import Bill from './Bill';
import Makepayment from './Makepayment';
import {useState} from 'react';

import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  
  const reg = (
  <div className="App">
    <header className="App-header">
      <Register/>      
    
    </header>
  </div>);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={reg}/>
        <Route path='/home' element={<><NavBar/> <Home/></>}/>
        <Route path='/cuisine' element={<><NavBar/> <Cuisine/> <Individual/></>}/>
        <Route path='/desc' element={<><NavBar/> <Description/> <TotalToKitchen/></>}/>
        <Route path='/bill' element={<><NavBar/> <Bill/> <Makepayment/></>}/>
        <Route path='/feedback' element={<><NavBar/> <Home/></>}/>
        <Route path='/contact' element={<><NavBar/> <Home/></>}/>
      </Routes>
    </BrowserRouter>
    {/* <NavBar/> */}
    {/* <Description/> */}
    {/* <Bill/> */}
    {/* <Cuisine/> */}
    {/* <Home/> */}
    {/* <Feedback/> */}
    {/* <div className="App">
      <header className="App-header">
        <Register/>      
        
      </header>
    </div> */}
    {/* <Individual/> */}
    {/* <TotalToKitchen/> */}
    {/* <Makepayment/> */}
    </>
  
  );
}

export default App;
