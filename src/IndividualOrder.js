import loginImage from "./loginimage.png";
import "./App.css";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import veg from "./veg.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import cuisine1 from './cuisine1.jpg'
function IndividualOrder() {
  let navigate = useNavigate();
  let location = useLocation();
  const [counter, setCounter] = useState(1);

  const addItem = () => {
    let tempCount = counter;
    tempCount += 1;
    if (tempCount <= 10) {
      setCounter(tempCount);
    }
  };

  const subItem = () => {
    let tempCount = counter;
    tempCount -= 1;
    if (tempCount >= 1) {
      setCounter(tempCount);
    }
  };

  const cartItem = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8000/restaurant/order/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resId: location.state.resId,
          userId: location.state.userId,
          foodId: location.state.item.id,
          quantity: counter,
          price: counter * location.state.item.price,
        }),
      });

      let resJson = await res.json();
      console.log(resJson);

      if (res.status === 200) {
        console.log(location.state.category, location.state.resId);
        navigate("/cuisine", {
          state: {
            resId: location.state.resId,
            userId: location.state.userId,
            category: location.state.category,
          },
        });
        console.log("Working Fine.");
      } else {
        console.log("Not Working");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <div className="separateorder">
        <div className="separateimage">
          <img src={`http://127.0.0.1:8000${location.state.item.image}`}></img>
        </div>
        <div>
          <img className="vegsym" src={veg}></img>
          <span className="vegsym1">Veg</span>
        </div>
        <div className="itemname">{location.state.item.foodName}</div>
        <div className="reviewfont">REVIEW</div>
        <div className="reviewfont">{location.state.item.description}</div>
      </div>

      <div className="separateorder">
        <textarea
          className="separatedesc"
          placeholder="Customize according to your taste."
        ></textarea>
      </div>

      <div className="separateorder">
        <div className="additemdiv">
          <div className="addbtn1">
            <Button className="leftplus" onClick={subItem} variant="danger">
              -
            </Button>
            <span className="quantity">{counter}</span>
            <Button className="rightminus" onClick={addItem} variant="danger">
              +
            </Button>
          </div>
          <Button
            variant="danger"
            className="addbtn"
            style={{ display: "flex" }}
            onClick={cartItem}
          >
            <span style={{ flex: "50%" }}>Add</span>
            <span style={{ flex: "50%" }}>
              &#8377;{counter * location.state.item.price}
            </span>
          </Button>
        </div>
      </div> */}

      {/* Card */}
      <div className="individualdiv container">
        <Card className="individualordercard">
          <Card.Img variant="top" src={cuisine1} />
          <Card.Body>
            <Card.Title>Dosa</Card.Title>
            <div>
              <img className="vegsym" src={veg}></img>
              <span className="vegsym1">Veg</span>
            </div>
            <div className="reviewfont">REVIEW</div>
            <Card.Text>
              Vero et dolores ipsum sit voluptua eos sit eirmod magna, no stet
              erat dolores lorem dolor duo labore ipsum dolor..
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item style={{display: "flex"}}>
              <div className="addbtn1">
                <b>Quantity:</b>
                <Button className="leftplus" onClick={subItem} variant="danger">
                  -
                </Button>
                <span className="quantity">{counter}</span>
                <Button
                  className="rightminus"
                  onClick={addItem}
                  variant="danger"
                >
                  +
                </Button>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <textarea
                className="separatedesc"
                placeholder="Customize according to your taste."
              ></textarea>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Price:</b> &#8377; 250.00
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card className="individualordercard">
          <Card.Body style={{ display: "flex", flexGrow: "0" }}>
            {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            <div className="flex">
              <Button style={{ width: "45%" }} variant="danger">
                Back to Menu
              </Button>
              <Button style={{ width: "45%" }} variant="warning" onClick={cartItem}>
                Add
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default IndividualOrder;
