import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

import "./App.css";
import { Profile } from "./profile/Profile";

function App() {
  const handleName = () => {
    alert("user2021");
  };
  const formulaire = (
    <Form>
      <Form.Group controlId="formBasicText">

        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter you full name" />
        <Form.Text className="text-muted">
          We'll never share your informations with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Profession</Form.Label>
        <Form.Control type="text" placeholder="Your profession"/>
      </Form.Group>
      
      <Form.Group controlId="formBasicText">
        <Form.Label>Bio</Form.Label>
        <Form.Control type="text" placeholder="your Bio"/>
      </Form.Group>
    </Form>
    
  );

  return (
    <div className="App">
      <Profile pops={formulaire}>
        <img src="/ProfilePic.jpeg" alt=" logo" style={{ width: "20%" }} />
        <br />
        <br />
        <Button onClick={handleName}>click here !</Button>
      </Profile>
    </div>
  );
}

export default App;
