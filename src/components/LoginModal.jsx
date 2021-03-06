import { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions";
import { validateInputs } from "../utils/validateInputs";

const LoginModal = ({ handleClose }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userData = { email, password };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      validateInputs(email, password);
      dispatch(loginUser(userData));
      setEmail("");
      setPassword("");
      setLoading(false);
      handleClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Container className="w-100 ">
      {loading ? (
        <Container className="d-flex w-100 justify-content-center">
          <Spinner animation="grow" className="mx-4" />
          <Spinner animation="grow" className="mx-4" />
          <Spinner animation="grow" className="mx-4" />
          <Spinner animation="grow" className="mx-4" />
        </Container>
      ) : (
        <></>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Login
        </Button>
        {/* <Button variant="danger" type="submit" className="w-100 mt-3">
          <div className="d-flex justify-content-center align-items-center">
            <SiGoogle className="mr-3" />
            <div>Login with Google</div>
          </div>
        </Button> */}
      </Form>
    </Container>
  );
};

export default LoginModal;
