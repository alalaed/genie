import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Datepicker from "react-datepicker";
import { createCode, getCodes, delCode } from "../../utils/code";
import "react-datepicker/dist/react-datepicker.css";
import { BsTrash } from "react-icons/bs";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";
import { useState } from "react";
import { useEffect } from "react";

const CreateCodePage = () => {
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState("");
  const [codes, setCodes] = useState([]);

  const token = useSelector((state) => state.userReducer?.accessToken);

  useEffect(() => {
    getCodes().then((res) => setCodes(res.data));
  });

  const handleSubmit = (e) => {
    console.log(token);
    e.preventDefault();
    setLoading(true);
    createCode({ name, expiry, discount }, token)
      .then((res) => {
        setLoading(false);
        setName("");
        setExpiry("");
        setDiscount("");
        toast.success(`${res.data.name} is created !`);
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = (codeId) => {
    if (window.confirm("Delete")) {
      setLoading(true);
      delCode(codeId, token)
        .then((res) => {
          getCodes().then((res) => setCodes(res.data));
          setLoading(false);
          toast.error(`${res.data.name} is deleted !`);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="d-none d-md-block px-0">
          <AdminSidebar />
        </Col>
        <Col md={10} className="mt-3">
          <Row>
            <h4>Create a Promo Code</h4>
            <Col sm={4}>
              <Form.Group
                className="mb-3"
                controlId="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              >
                <Form.Control type="string" placeholder="Enter PromoCode" />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group
                className="mb-3"
                controlId="discount"
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
              >
                <Form.Control type="string" placeholder="Discount" />
              </Form.Group>
            </Col>

            <Col sm={3}>
              <Datepicker
                className="form-control"
                selected={expiry || new Date()}
                onChange={(date) => setExpiry(date)}
                value={expiry}
                required
              />
            </Col>
          </Row>
          <Button type="submit" onClick={handleSubmit}>
            submit
          </Button>
          <Row className="mt-3">
            <h4>All Promo Codes</h4>
            <Col>
              <ListGroup as="ol">
                <ListGroup.Item as="li">
                  <Row>
                    <Col sm={3} className="d-flex justify-content-center">
                      <h6 className="fw-bold my-0">PromoCode</h6>
                    </Col>
                    <Col sm={3} className="d-flex justify-content-center">
                      <h6 className="fw-bold my-0">Valid until</h6>{" "}
                    </Col>
                    <Col sm={3} className="d-flex justify-content-center">
                      <h6 className="fw-bold my-0">Discount</h6>
                    </Col>
                    <Col sm={3} className="d-flex justify-content-center">
                      <h6 className="fw-bold my-0">Delete</h6>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {codes.map((code) => (
                  <ListGroup.Item as="li">
                    <Row>
                      <Col sm={3} className="d-flex justify-content-center">
                        {code.name}
                      </Col>
                      <Col sm={3} className="d-flex justify-content-center">
                        {new Date(code.expiry).toLocaleDateString()}
                      </Col>
                      <Col sm={3} className="d-flex justify-content-center">
                        {code.discount}
                      </Col>
                      <Col sm={3} className="d-flex justify-content-center">
                        <BsTrash
                          style={{ color: "red" }}
                          onClick={() => handleRemove(code._id)}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCodePage;
