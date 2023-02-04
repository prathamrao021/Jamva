import loginImage from "./loginimage.png";
import "./App.css";
import Button from "react-bootstrap/Button";
function Makepayment() {
  return (
    <>
      <div className="individualcard">
        <div className="flex m-1">
          <h5>Total Payment</h5>
          <p>&#8377; 2000.00</p>
        </div>
        <div className="flex">
          <Button style={{ width: "45%" }} variant="warning">
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

export default Makepayment;
