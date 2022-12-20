import loginImage from './loginimage.png';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register() {
  return (
    <><img src={loginImage} ></img>
    <div className="leftalign">
        <h1>Welcome!</h1>
        <Form>
        <Form.Group className="mb-3 border1" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="text" placeholder="Name" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3 border1" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>
        <span className='getotp'>GET OTP</span>

        <Form.Group className="mb-3 border1" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="text" placeholder="Enter OTP" />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button className="submitbtn" variant="success" type="submit">
            Submit
        </Button>
        <Button className="submitbtn" variant="success" type="submit">
            Resend OTP
        </Button>
        </Form>
    </div></>       
  );
}

export default Register;