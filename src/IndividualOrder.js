import loginImage from './loginimage.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleRight } from "react-icons/fa";
import veg from './veg.jpg';
import cuisine1 from './cuisine1.jpg';
import cuisine2 from './cuisine2.jpg';
import cuisine3 from './cuisine3.jpg';

function IndividualOrder() {
  return (
    <>
    {/* <div className='individualcard'>
        <h4 className='m-2'>Plain Dosa</h4>
        <div className='m-2'>Dosa is a thin batter-based dish (usually plain) originating
             from South India made from a fermented batter predominantly consisting of lentils and rice
        </div>
        <div className='additemdiv'>
          <div><span className='leftplus'>+</span><span className='quantity'>1</span><span className='rightminus'>-</span></div>
         <Button variant="dark" className='addbtn'>Add</Button>
        </div>

        <div>
          <Button className='nextbtn' variant="warning">
            <div className='flexcol'>
            <div className='leftalign'>
              <div>
                2 ITEMS
              </div>
              <div>
                &#8377;275.00
              </div>
            </div>
            <div className='rightalign'>
              NEXT<FaArrowAltCircleRight style={{marginBottom:"auto", marginTop:"auto"}}/>
            </div>
            </div>
          </Button>  
        </div>
        
    </div> */}
    <div className='separateorder'>
      <div className='separateimage'>
        <img src={cuisine2}></img>
      </div>
      <div>
        <img className='vegsym' src={veg}></img><span className='vegsym1'>Veg</span>
      </div>
      <div className='itemname'>
        Chatpata Tikki Filler Burger[Spicy]
      </div>
      <div className='reviewfont'>
        REVIEW
      </div>
      <div className='reviewfont'>
        Et rebum et takimata dolor eirmod rebum at diam, erat no dolor dolor gubergren sit 
        sed lorem no takimata. Aliquyam tempor consetetur justo elitr sit dolor et est aliquyam. 
        Sed lorem nonumy tempor no, erat eos est tempor dolor aliquyam elitr et, duo duo diam sanctus elitr duo sanctus. No.
      </div>
    </div>


    <div className='separateorder'>
      <textarea className='separatedesc' placeholder='Customize according to your taste.'></textarea>
      <div>Add On:</div>
      <div ><input className='addons' type="checkbox"/><span className='reviewfont'>Green Chuteney</span><span className='rightsided'>&#8377; 20</span></div>
      <div ><input className='addons' type="checkbox"/><span className='reviewfont'>Green Chuteney</span><span className='rightsided'>&#8377; 30</span></div>
      <div ><input className='addons' type="checkbox"/><span className='reviewfont'>Green Chuteney</span><span className='rightsided'>&#8377; 30</span></div>
      <div ><input className='addons' type="checkbox"/><span className='reviewfont'>Green Chuteney</span><span className='rightsided'>&#8377; 40</span></div>
      <div ><input className='addons' type="checkbox"/><span className='reviewfont'>Green Chuteney</span><span className='rightsided'>&#8377; 50</span></div>

    </div>
    <div className='separateorder'>
      <div className='additemdiv'>
        <div className='addbtn1'><Button className='leftplus' variant='danger'>+</Button><span className='quantity'>1</span><Button className='rightminus' variant='danger'>-</Button></div>
        <Button variant="danger" className='addbtn' style={{display:"flex"}}><span style={{flex:"50%"}}>Add</span><span style={{flex:"50%"}}>&#8377;150</span></Button>
      </div>
    </div>
    </>
  
  );
}

export default IndividualOrder;
