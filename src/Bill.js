import loginImage from "./loginimage.png";
import "./App.css";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router";
import veg from "./veg.jpg";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import cuisine1 from "./cuisine1.jpg";

function Bill() {
  let navigate = useNavigate();
  let location = useLocation();

  const [items, setItems] = useState([]);
  const [items1, setItems1] = useState([]);

  useEffect(() => {
    editorder();
  }, []);

  const editorder = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8000/restaurant/finalorder/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resId: String(location.state.resId),
          userId: location.state.userId,
          status: 0,
        }),
      });

      let resJson = await res.json();
      console.log(resJson);

      if (res.status === 200) {
        setItems(resJson.data2);
        setItems1(resJson.data1);
        console.log(resJson.data2);
      } else {
        console.log("bill.js not working");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const backtomenu = () =>{
    navigate("/home", {
      state: {
        resId: location.state.resId,
        userId: location.state.userId,
        category: location.state.category,
      },
    });
  };

  return (
    <>
      <Form className="tableno">
        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "800" }}>
            Enter your Table No.
          </Form.Label>
          <Form.Control type="text" placeholder="Eg. 21" />
        </Form.Group>
      </Form>
      {console.log(items)}

      {/* <div className="cuisinepage">
        {items.map((item, i) => (
          <div key={i} className="cuisines">
            <div className="cuisineitems">
              <div>
                <img className="vegsym" src={veg}></img>
                <span className="vegsym1">Veg</span>
              </div>
              <div className="itemname">{item.foodName}</div>
              <div className="reviewfont">Quantity: {items1[i].quantity}</div>
              <div>
                <span>&#8377; {item.price}.00</span>
              </div>
              <div className="reviewfont">{item.description}</div>
            </div>
            <div className="cuisinesphoto">
              <img src={`http://127.0.0.1:8000${item.image}`}></img>
              <div className="flex">
                <Button style={{ width: "45%" }} variant="danger">
                  &#9746;
                </Button>
                <Button style={{ width: "45%" }} variant="warning">
                  &#9998;
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="carditem container">
        {items.map((item, i) => (
          <Card className="cardbill">
            <Card.Img
              variant="top"
              src={`http://127.0.0.1:8000${item.image}`}
            />
            <Card.Body>
              <Card.Title>{item.foodName}</Card.Title>
              <div>
                <img className="vegsym" src={veg}></img>
                <span className="vegsym1">Veg</span>
              </div>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Quantity: {items1[i].quantity}</ListGroup.Item>
              <ListGroup.Item>
                Price: &#8377; {item.price * items1[i].quantity}.00
              </ListGroup.Item>
            </ListGroup>
            <Card.Body style={{ display: "flex", flexGrow: "0" }}>
              {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
              <div className="flex">
                <Button style={{ width: "45%" }} variant="danger">
                  &#9746;
                </Button>
                <Button style={{ width: "45%" }} variant="warning">
                  &#9998;
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="individualcard">
          <div className="flex m-1">
            <h5>Total Payment</h5>
            <p>&#8377; 2000.00</p>
          </div>
          <div className="flex">
            <Button style={{ width: "45%" }} variant="warning" onClick={backtomenu}>
              Back to Menu
            </Button>
            <Button style={{ width: "45%" }} variant="success">
              Pay to Order
            </Button>
          </div>
        </div>
    </>
  );
}

export default Bill;
