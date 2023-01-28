import './App.css';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import loginImage from './loginimage.png';
import veg from './veg.jpg';
import Button from 'react-bootstrap/esm/Button';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { render } from '@testing-library/react';

function CuisineItem() {
  let navigate = useNavigate();
  let location = useLocation();
  const [menuItems, setMenuItems] = useState([]);
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState([])

  useEffect(() => {
    menus()
  }, []);

  const menus = async () => {
    try {
      console.log(location.state.resId, location.state.category, "dajvdasiyvdsayibdasibdisaiudbas")
      let res = await fetch("http://127.0.0.1:8000/restaurant/menu/category/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "resId": String(location.state.resId),
          "category": location.state.category
        }),
      });

      let quan = await fetch("http://127.0.0.1:8000/restaurant/order/", {
        method: "GET"
      });
      
      let cat = await fetch ("http://127.0.0.1:8000/restaurant/category/", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "resId": location.state.resId
          }),
      });
      let catJson = await cat.json();
      let quanJson = await quan.json();
      let resJson = await res.json();
      console.log(resJson, quanJson, catJson)

      if (res.status === 200) {
        setMenuItems(resJson.data);
        setQuantity(quanJson.data.totalQuantity);
        setPrice(quanJson.data.totalPrice);
        setCategory(catJson.data);
        console.log(menuItems);
        console.log("Working Fine.");

      } else {
        console.log("Not Working");
      }
    }
    catch (err) {
      console.log(err);
    }

  };

  return (
    <>
    <div>
      {
        category.map((items, i) =>(
          <span key={i}>
            <Button variant='warning' onClick={() => { location.state.category=items.category; menus()}}>{items.category}
            </Button>
            </span>
          )
        )
      }
      
    </div>
      <div className='cuisinepage'>
        {
          menuItems.map((item, i) => (
            <div key={i} className='cuisines'>

              <div className='cuisineitems'>
                <div>
                  <img className='vegsym' src={veg}></img><span className='vegsym1'>Veg</span>
                </div>
                <div className='itemname'>
                  {item.foodName}
                </div>
                <div className='reviewfont'>
                  About
                </div>
                <div>
                  <span>&#8377;{item.price}.00</span>
                </div>
                <div className='reviewfont'>
                  {item.description}
                </div>
              </div>
              <div className='cuisinesphoto'>
                <img src={`http://127.0.0.1:8000${item.image}`} >{item.category}</img>
                <Button style={{ width: "100%" }} variant="warning" onClick={() => navigate('/individual', { state: { resId: location.state.resId, userId: location.state.userId, item: item, category: location.state.category } })}>Add</Button>
              </div>
            </div>
          )
          )
        }

        {/* Number of items */}
        <div className='individualcard'>
            <div>
              <Button className='nextbtn' variant="warning" onClick={() => navigate('/bill', {state: {resId: location.state.resId, userId: location.state.userId}})}>
                <div className='flexcol'>
                  <div className='leftalign'>
                    <div>
                      {quantity} ITEMS
                    </div>
                    <div>
                      &#8377;{price}.00
                    </div>
                  </div>
                  <div className='rightalign'>
                    NEXT<FaArrowAltCircleRight style={{ marginBottom: "auto", marginTop: "auto" }} />
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