import loginImage from './loginimage.png';
import './App.css';
import Button from 'react-bootstrap/Button';
function Bill() {
  return (
    <>
    <div style={{
      // marginBottom: '100px',
       marginLeft: '1em', marginRight: '1rem', height: '75vh'}}>
        <div className='m-2'>
            <div className='cuisineitmes'>Upma  <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span></div>
            
            <div className='cuisineitmes'>Rava Upma <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span></div>
            
            <div className='cuisineitmes'>Semai Upma <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span></div>
            
            <div className='cuisineitmes'>Apam <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span></div>
            
            <div className='cuisineitmes'>Idli Apam <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span></div>
            
        </div>
    </div>
    </>
  
  );
}

export default Bill;
