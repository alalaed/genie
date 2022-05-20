import AdminSidebar from "../../components/AdminSidebar";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getCategory, updateCategory } from "../../utils/category";
import { useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";

const AdminCategoryUpdate = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState(params.slug);
  const [loading, setLoading] = useState(false);

  const token = useSelector((state) => state.userReducer?.accessToken);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = () => {
    getCategory().then((c) => setName(c.data.name));
    console.log(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateCategory(params.slug, { name }, token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is updated !`);
        navigate("/admin/category");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  return (
    <Container>
      <Row>
        <Col md={2} className="d-none d-md-block">
          <AdminSidebar />
        </Col>
        <Col md={10}>
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Create a new Category"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <div className="w-100 d-flex justify-content-center mt-3">
              <Button variant="warning" type="submit" className="w-50">
                Update
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCategoryUpdate;
