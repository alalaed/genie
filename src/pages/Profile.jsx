import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../utils/fetch";
import AdminSidebar from "../components/AdminSidebar";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const userToken = useSelector((state) => state.userReducer.accessToken);

  useEffect(() => {
    if (user) toast(`Hello ${user.name}`);
  }, []);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const userData = { name, surname };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userData, userToken);
  };
  return (
    <Container>
      <Row>
        <Col md={10}>
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

            <Button variant="success" type="submit" className="w-100">
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
