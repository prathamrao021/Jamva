import loginImage from './loginimage.png';
import './App.css';
import Button from 'react-bootstrap/Button';
function IndividualOrder() {
  return (
    <>
    <div className='individualcard'>
        <h4 className='m-2'>Plain Dosa</h4>
        <div className='m-2'>Dosa is a thin batter-based dish (usually plain) originating
             from South India made from a fermented batter predominantly consisting of lentils and rice
        </div>
        <div className='additemdiv'>
          <div><span className='leftplus'>+</span><span className='quantity'>1</span><span className='rightminus'>-</span></div>
         <Button variant="dark" className='addbtn'>Add</Button>
        </div>
        
    </div>
    </>
  
  );
}

export default IndividualOrder;
