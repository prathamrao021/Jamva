import loginImage from './loginimage.png';
import './App.css';
import Button from 'react-bootstrap/Button';
function TotalToKitchen() {
  return (
    <>
    <div className='individualcard'>
        <h4 className='m-2'>Total <span className='rightsided'> Rs 3000</span></h4>
        <div style={{display: 'flex'}}>
            <Button variant="dark" className='sendtokitchen m-2'>Add</Button>

            <Button variant="dark" className='sendtokitchen'>Send To Kitchen</Button>
        </div>
        
    </div>
    </>
  
  );
}

export default TotalToKitchen;
