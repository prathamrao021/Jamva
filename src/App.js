import loginImage from './loginimage.png';
import './App.css';
import Register from './Register';
import NavBar from './Navabar';
import Home from './Home';
import Feedback from './Feedback';
import Cuisine from './CuisineItem';
import Description from './Description';
import TotalToKitchen from './TotalToKitchen';
import Bill from './Bill';
import Makepayment from './Makepayment';
import Cardpayment from './Cardpayment';
import Editpage from './Editpage';
import {useState} from 'react';
import IndividualOrder from './IndividualOrder';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Loader from './Loader';



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
        <Route path='/:resId' element={reg}/>
        <Route path='/' element={reg}/>
        <Route path='/home' element={<><NavBar/> <Home/></>}/>
        <Route path='/cuisine' element={<><NavBar/> <Cuisine/></>}/>
        <Route path='/individual' element={<><NavBar/> <IndividualOrder/></>}/>  
        <Route path='/edit' element={<><NavBar/> <Editpage/></>}/>        
        <Route path='/desc' element={<><NavBar/> <Description/> <TotalToKitchen/></>}/>
        <Route path='/bill' element={<><NavBar/> <Bill/></>}/>
        <Route path='/payment' element={<><NavBar/> <Makepayment/></>}/>
        <Route path='/feedback' element={<><NavBar/><Feedback/></>}/>
        <Route path='/contact' element={<><NavBar/><Loader/></>}/>
        <Route path='/card' element={<><NavBar/><Cardpayment/></>}/>
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