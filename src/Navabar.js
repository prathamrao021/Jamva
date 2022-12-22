import loginImage from './loginimage.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import man from './man.png';
import Feedback from './Feedback';
import name from "./Register";
import { useLocation } from 'react-router';

function NavBar() {
  let location = useLocation();
  console.log(location.state.resId);
  let resName;

  try {
    let res = fetch(`http://127.0.0.1:8000/restaurant/detail/`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          "resId": location.state.resId
        }), 
    });
    let resJson = res.json();
    if (res.status === 200) {
      // setMessage("User created successfully");
      console.log("Working Fine.");
      resName = resJson.data[0].name;
      // navigate(`/home`, {state:{resId:1, userId: userId}});
    } else {
      console.log("Not Working")
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <>
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand><img style={{width:"10vw"}} src={man}></img></Navbar.Brand>
        <Navbar.Brand href="#home">{resName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" className='disabled'>Profile</Nav.Link>
            <Nav.Link href="#feedback">Feedback</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;