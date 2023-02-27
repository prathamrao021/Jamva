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
import cuisine1 from "./cuisine1.jpg";

function Editpage() {
  let navigate = useNavigate();
  let location = useLocation();

  const [foodItem, setFoodItem] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setFoodItem(location.state.item);
  }, []);

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

  //   console.log(foodItem);

  return (
    <>
      {/* Card */}
      <div className="individualdiv container">
        {/* {foodItem.map((items, i) => ( */}
        <Card className="individualordercard">
          <Card.Img
            variant="top"
            src={`http://127.0.0.1:8000${foodItem.image}`}
          />
          <Card.Body>
            <Card.Title>{foodItem.foodName}</Card.Title>
            <div>
              <img className="vegsym" src={veg}></img>
              <span className="vegsym1">Veg</span>
            </div>
            <div className="reviewfont">RATINGS : {foodItem.ratings}</div>
            <Card.Text>{foodItem.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item style={{ display: "flex" }}>
              <div className="addbtn1">
                <b>Quantity:</b>
                <button className="leftplus" onClick={subItem}>
                  -
                </button>
                <span className="quantity">{counter}</span>
                <button className="rightminus" onClick={addItem}>
                  +
                </button>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <textarea
                className="separatedesc"
                placeholder="Customize according to your taste."
              >
                {foodItem.description}
              </textarea>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Price:</b> &#8377; {foodItem.price}.00
            </ListGroup.Item>
          </ListGroup>
          <Card.Body style={{ display: "flex", flexGrow: "0" }}>
            {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            <div className="flex">
              <Button
                className="individual_btn"
                onClick={() => {
                  navigate("/bill", {
                    state: {
                      resId: location.state.resId,
                      userId: location.state.userId,
                      status: 0
                    },
                  });
                }}
              >
                Back
              </Button>
              <Button className="individual_btn">Update</Button>
            </div>
          </Card.Body>
        </Card>
        {/* ))}; */}
      </div>
    </>
  );
}

export default Editpage;
