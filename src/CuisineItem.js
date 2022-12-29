import './App.css';
import loginImage from './loginimage.png';
import veg from './veg.jpg';
import Button from 'react-bootstrap/esm/Button';
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
    </div>
    </>
  
  );
}

export default CuisineItem;
