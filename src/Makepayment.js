import loginImage from "./loginimage.png";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Makepayment() {
  return (
    <>
      <div className="container calcheight">
        <h3>Payment Type:</h3>
        <div className="pay">
          <div className="paymenttypecard work">
            <div className="img-section">
            </div>
            <div className="card-desc">
              <div className="card-header">
                <div className="card-title">Payment</div>
                <div className="card-menu">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="card-time">Card</div>
            </div>
          </div>
          <div className="paymenttypecard work">
            <div className="img-section">
            </div>
            <div className="card-desc">
              <div className="card-header">
                <div className="card-title">Payment</div>
                <div className="card-menu">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="card-time">Cash</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="makepaymentcard">
        <div className="flex m-1">
          <h5>Total Payment</h5>
          <p>&#8377; 2000.00</p>
        </div>
        <div>
          <Button className="individual_btn"></Button>
          <Button className="individual_btn">Pay to Order</Button>
        </div>
      </div> */}
    </>
  );
}

export default Makepayment;
