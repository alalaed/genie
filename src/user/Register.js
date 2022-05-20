import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/fetch.js";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const switchAdmintoUser = () => {
    setIsAdmin(!isAdmin);
  };
  let role = "";

  if (isAdmin) {
    role = "Admin";
  } else {
    role = "User";
  }

  const userData = { name, surname, email, password, role };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(userData);
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    navigate("/login");
  };
  // useEffect(() => {
  //   if (user && user.token) navigate("/");
  // }, [user]);
  return (
    <Container className="w-50 mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Check
          type="switch"
          id="custom-switch"
          label="Register as an admin "
          className="mb-3"
          onChange={switchAdmintoUser}
        />

        <Button variant="success" type="submit" className="w-100">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
