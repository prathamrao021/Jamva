import loginImage from './loginimage.png';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import jamva from './Jamva.png';

function Register() {
    let navigate = useNavigate();
    let userId;

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [otp, setOTP] = useState("");
    let [mins, setMins] = useState(1);
    let [secs, setSecs] = useState(5);
    let myInterval;

    const Sub = async (e) =>{ 

        e.preventDefault();
        try {
          let res = await fetch(`http://127.0.0.1:8000/userlogin/${phone}/${name}`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "otp": otp
              }), 
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setMessage("User created successfully");
            navigate(`/home`, {state:{resId:1, userId: userId}});
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
    };

    const getOTP = async (e) => {
        // e.preventDefault();
        // try {
        //   let res = await fetch(`http://127.0.0.1:8000/userlogin/${phone}/${name}`, {
        //     method: "GET",
        //   });
        //   let resJson = await res.json();
        //  userId = resJson.id;
        //   if (res.status === 200) {
        //     setMessage("User created successfully");
        //   } else {
        //     setMessage("Some error occured");
        //   }
        // } catch (err) {
        //   console.log(err);
        // }
        
        myInterval = setInterval(()=>{
          stopwatch()
        },1000
        );
    };

    const stopwatch = () =>{
      console.log(mins,secs);

      // document.getElementbyId('getotp').innerHTML="mins:secs"

      if(mins>=0)
      { 
        if(secs>=0)
        {
          setSecs((secs)=>(secs-1));
        }
        else
        {
          console.log("ghjk")
          setSecs(()=>60);
          setMins((mins)=>(mins-1));
        }
      }
      if(mins<0)
      {
        if(secs > 0)
        {
          setSecs((secs)=>(secs-1));;
        }
        if(secs===0)
        {
          clearInterval(myInterval);
          console.log("Expired");
        }
      }
      // setSecs((secs)=>(secs-1));
    };

  return (
    <><img className='registerimg' src={jamva} ></img>
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
        <span onClick={getOTP} className='getotp'>GET OTP {mins}:{secs}</span>

        <Form.Group className="mb-3 border1" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="text" placeholder="Enter OTP" onChange={event => setOTP(event.target.value)} value={otp}/>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button onClick={Sub} className="submitbtn" variant="success">
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