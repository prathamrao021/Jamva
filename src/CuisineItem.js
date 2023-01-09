import './App.css';
import loginImage from './loginimage.png';
import veg from './veg.jpg';
import Button from 'react-bootstrap/esm/Button';
import { FaArrowAltCircleRight } from "react-icons/fa";

function CuisineItem() {
  return (
    <>
    <div className='cuisinepage'>
        {/* <div className='m-2'>
            <div className='cuisineitmes'>Upma <span className='rightsided'>Rs 300</span></div>
            <div className='cuisineitmes'>Rava Upma <span className='rightsided'>Rs 300</span></div>
            <div className='cuisineitmes'>Semai Upma <span className='rightsided'>Rs 300</span></div>
            <div className='cuisineitmes'>Apam <span className='rightsided'>Rs 300</span></div>
            <div className='cuisineitmes'>Idli Apam <span className='rightsided'>Rs 300</span></div>
        </div> */}
        <div className='cuisines'>
            <div className='cuisineitems'>
                <div>
                    <img className='vegsym' src={veg}></img><span className='vegsym1'>Veg</span>
                </div>
                <div className='itemname'>
                    Chatpata Tikki Filler Burger[Spicy]
                </div>
                <div className='reviewfont'>
                    REVIEW
                </div>
                <div>
                    <spna>&#8377;55.00</spna>
                </div>
                <div className='reviewfont'>
                    Eirmod at est diam gubergren duo accusam elitr. Duo dolores ipsum clita ea elitr diam consetetur stet dolor, lorem amet.
                </div>
            </div>
            <div className='cuisinesphoto'>
                <img src={loginImage}></img>
                <Button style={{width:"100%"}} variant="danger">Add</Button>
            </div>
        </div>
        <hr></hr>
        <div className='cuisines'>
            <div className='cuisineitems'>
                <div>
                    <img className='vegsym' src={veg}></img><span className='vegsym1'>Veg</span>
                </div>
                <div className='itemname'>
                    Chatpata Tikki Filler Burger[Spicy]
                </div>
                <div className='reviewfont'>
                    REVIEW
                </div>
                <div>
                    <spna>&#8377;55.00</spna>
                </div>
                <div className='reviewfont'>
                    Eirmod at est diam gubergren duo accusam elitr. Duo dolores ipsum clita ea elitr diam consetetur stet dolor, lorem amet.
                </div>
            </div>
            <div className='cuisinesphoto'>
                <img src={loginImage}></img>
                <Button style={{width:"100%"}} variant="danger">Add</Button>
            </div>
        </div>
        <hr></hr>
        <div className='cuisines'>
            <div className='cuisineitems'>
                <div>
                    <img className='vegsym' src={veg}></img><span className='vegsym1'>Veg</span>
                </div>
                <div className='itemname'>
                    Chatpata Tikki Filler Burger[Spicy]
                </div>
                <div className='reviewfont'>
                    REVIEW
                </div>
                <div>
                    <spna>&#8377;55.00</spna>
                </div>
                <div className='reviewfont'>
                    Eirmod at est diam gubergren duo accusam elitr. Duo dolores ipsum clita ea elitr diam consetetur stet dolor, lorem amet.
                </div>
            </div>
            <div className='cuisinesphoto'>
                <img src={loginImage}></img>
                <Button style={{width:"100%"}} variant="danger">Add</Button>
            </div>
        </div>
        <hr></hr>
        <div className='cuisines'>
            <div className='cuisineitems'>
                <div>
                    <img className='vegsym' src={veg}></img><span className='vegsym1'>Veg</span>
                </div>
                <div className='itemname'>
                    Chatpata Tikki Filler Burger[Spicy]
                </div>
                <div className='reviewfont'>
                    REVIEW
                </div>
                <div>
                    <spna>&#8377;55.00</spna>
                </div>
                <div className='reviewfont'>
                    Eirmod at est diam gubergren duo accusam elitr. Duo dolores ipsum clita ea elitr diam consetetur stet dolor, lorem amet.
                </div>
            </div>
            <div className='cuisinesphoto'>
                <img src={loginImage}></img>
                <Button style={{width:"100%"}} variant="danger">Add</Button>
            </div>
        </div>
        <hr></hr>



        {/* Number of items */}
        <div className='individualcard'>
        {/* <h4 className='m-2'>Plain Dosa</h4>
        <div className='m-2'>Dosa is a thin batter-based dish (usually plain) originating
             from South India made from a fermented batter predominantly consisting of lentils and rice
        </div>
        <div className='additemdiv'>
          <div><span className='leftplus'>+</span><span className='quantity'>1</span><span className='rightminus'>-</span></div>
         <Button variant="dark" className='addbtn'>Add</Button>
        </div> */}

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
        
    </div>
    </div>
    </>
  
  );
}

export default CuisineItem;
