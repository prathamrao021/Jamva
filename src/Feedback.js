import './App.css';
import Register from './Register';
import NavBar from './Navabar';
import Home from './Home';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Feedback() {
  return (
    <>
    <h3 className='m-2'>Feedback</h3>
    <Form className="m-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="text" placeholder="Send your Feedback" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary submitbtn" type="submit">
        Send
      </Button>
    </Form>
    </>
  
  );
}

export default Feedback;
