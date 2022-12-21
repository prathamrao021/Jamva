import loginImage from './loginimage.png';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

function Register() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const Sb = () =>{
        console.log(name, phone);
    }

    const getOTP = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch(`http://127.0.0.1:8000/userlogin/${phone}/${name}`, {
            method: "GET",
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setName("");
            setPhone("");
            setMessage("User created successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <><img src={loginImage} ></img>
    <div className="leftalign">
        <h1>Welcome!</h1>
        <Form name='formOne'>
        <Form.Group className="mb-3 border1" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="text" placeholder="Name" onChange={event => setName(event.target.value)} value={name}/>
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3 border1" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="text" placeholder="Phone Number" onChange={event => setPhone(event.target.value)} value={phone}/>
        </Form.Group>
        <span onClick={getOTP} className='getotp'>GET OTP</span>

        <Form.Group className="mb-3 border1" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="text" placeholder="Enter OTP" />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button onClick={Sb} className="submitbtn" variant="success">
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