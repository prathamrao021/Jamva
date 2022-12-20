import loginImage from './loginimage.png';
import './App.css';
import Button from 'react-bootstrap/Button';
function Description() {
  return (
    <>
    <div style={{
      // marginBottom: '100px',
       marginLeft: '1em', marginRight: '1rem'}}>
        <div className='m-2'>
            <div className='cuisineitmes'>Upma  <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span> <span className='rightsided'><span className='leftplus1'>+</span><span className='quantity1'>1</span><span className='rightminus1'>-</span></span></div>
            <div><textarea className='desc' placeholder='Description'></textarea></div>
            <div className='cuisineitmes'>Rava Upma <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span> <span className='rightsided'><span className='leftplus1'>+</span><span className='quantity1'>1</span><span className='rightminus1'>-</span></span></div>
            <div><textarea className='desc' placeholder='Description'></textarea></div>
            <div className='cuisineitmes'>Semai Upma <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span> <span className='rightsided'><span className='leftplus1'>+</span><span className='quantity1'>1</span><span className='rightminus1'>-</span></span></div>
            <div><textarea className='desc' placeholder='Description'></textarea></div>
            <div className='cuisineitmes'>Apam <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span> <span className='rightsided'><span className='leftplus1'>+</span><span className='quantity1'>1</span><span className='rightminus1'>-</span></span></div>
            <div><textarea className='desc' placeholder='Description'></textarea></div>
            <div className='cuisineitmes'>Idli Apam <span className='rightsided' style={{marginLeft: '10px'}}>Rs 300</span> <span className='rightsided'><span className='leftplus1'>+</span><span className='quantity1'>1</span><span className='rightminus1'>-</span></span></div>
            <div><textarea className='desc' placeholder='Description'></textarea></div>
        </div>
    </div>
    </>
  
  );
}

export default Description;
