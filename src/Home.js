import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import man from "./man.png";
import login from "./loginimage.png";
import cuisine1 from "./cuisine1.jpg";
import cuisine2 from "./cuisine2.jpg";
import cuisine3 from "./cuisine3.jpg";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loader from './Loader';


function Home() {
  let navigate = useNavigate();
  let location = useLocation();
  const [category, setCategory] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    categori();
    verification();
  }, []);

  const categori = async () => {
    try {
      setLoad(true);
      let res = await fetch("http://127.0.0.1:8000/restaurant/category/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resId: location.state.resId,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);

      if (res.status === 200) {
        console.log("Working Fine.");
        setCategory(resJson.data);
        console.log(category);
        setTimeout(setLoad(false), 5000);
        

      } else {
        console.log("Not Working");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const verification = async () => {
    //to check if user is actually there
    try {
      let res = await fetch("http://127.0.0.1:8000/userlogin/verify/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: location.state.userId,
        }),
      });

      let resJson = await res.json();
      if (res.status === 200) {
        console.log("user checked successfully.");
      } else {
        navigate("/");
      }
    } catch (err) {
      // console.log(err);
      navigate("/");
    }
  };

  const viewhome = (
    <div>
      <h3 className="m-2">Trending</h3>
      <div className="m-1 trending">
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
        </Card>
      </div>
      <h3 className="m-2">Cuisines</h3>
      <div>
        {category.map((item, i) => (
          <div key={i} className="cuisinecard">
            <div
              className="homephoto"
              style={{
                background: `linear-gradient(90deg, black, rgba(255, 255, 255, 0), black), url(http://127.0.0.1:8000${item.catImage})`,
                backgroundPosition: "0px",
                backgroundSize: "cover",
              }}
              onClick={() =>
                navigate("/cuisine", {
                  state: {
                    category: item.category,
                    resId: location.state.resId,
                    userId: location.state.userId,
                  },
                })
              }
            >
              {item.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
  <>
  {load ? <Loader/>: viewhome}
  </>
  );
}

export default Home;
