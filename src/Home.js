import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import man from './man.png';
import login from './loginimage.png';
import cuisine1 from './cuisine1.jpg';
import cuisine2 from './cuisine2.jpg';
import cuisine3 from './cuisine3.jpg';
function Home() {
  return (
    <>
    <h3 className='m-2'>Trending</h3>
    <div className='m-1 trending'>
        
        <Card className="cardholder">
        <Card.Img variant="top" src={man} />
        {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
        </Card>

        <Card className="cardholder">
        <Card.Img variant="top" src={login} />
        {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
        </Card>

        <Card className="cardholder">
        <Card.Img variant="top" src={man} />
        {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
        </Card>

        <Card className="cardholder">
        <Card.Img variant="top" src={login} />
        {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
        </Card>
        
    </div>
    
    <h3 className='m-2'>Cuisines</h3>
    <div className='cuisinecard'>
        <div className='cuisinesphoto' style={{background: `linear-gradient(90deg, black, rgba(255, 255, 255, 0), black), url(${cuisine1})`, backgroundPosition: '0px', backgroundSize: 'cover'}}>Mexican</div>
    </div>
    <div className='cuisinecard'>
        <div className="cuisinesphoto" style={{background: `linear-gradient(90deg, black, rgba(255, 255, 255, 0), black), url(${cuisine2})`, backgroundPosition: '0px', backgroundSize: 'cover'}}>Indian</div>
    </div>
    <div className='cuisinecard'>
        <div className="cuisinesphoto" style={{background: `linear-gradient(90deg, black, rgba(255, 255, 255, 0), black), url(${cuisine3})`, backgroundPosition: '0px', backgroundSize: 'cover'}}>Chinese</div>
    </div>
    <div className='cuisinecard'>
        <div className='cuisinesphoto' style={{background: `linear-gradient(90deg, black, rgba(255, 255, 255, 0), black), url(${cuisine1})`, backgroundPosition: '0px', backgroundSize: 'cover'}}>Italian</div>
    </div>
    <div className='cuisinecard'>
        <div className="cuisinesphoto" style={{background: `linear-gradient(90deg, black, rgba(255, 255, 255, 0), black), url(${cuisine2})`, backgroundPosition: '0px', backgroundSize: 'cover'}}>Beverages</div>
    </div>
    </>
  
  );
}

export default Home;