import AdminSidebar from "../../components/AdminSidebar";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  getCategories,
  deleteCategory,
  createCategory,
} from "../../utils/category";
import { useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

const AdminSubcategory = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  const token = useSelector((state) => state.userReducer?.accessToken);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories().then((c) => setCategories(c.data));
    console.log(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(false);
    createCategory({ name }, token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created`);
        loadCategories();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleRemove = async (slug) => {
    // let answer = window.confirm("Delete?");
    // console.log(answer, slug);
    if (window.confirm("Delete?")) {
      setLoading(true);
      deleteCategory(slug, token)
        .then((res) => {
          setLoading(false);
          toast.success(`${slug} deleted`);
          loadCategories();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value).toLowerCase();
  };

  const filtered = (query) => (q) => q.name.toLowerCase().includes(query);

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
                placeholder="Create a new Subcategory"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <div className="w-100 d-flex justify-content-center mt-3">
              <Button variant="dark" type="submit" className="w-50">
                Submit
              </Button>
            </div>

            <Form className="d-flex mt-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                value={query}
                onChange={handleSearch}
                aria-label="Search"
              />
            </Form>

            <ListGroup>
              {categories.filter(filtered(query)).map((c) => (
                <ListGroup.Item key={c._id} className="mt-3">
                  {c.name}
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(c.slug)}
                    className="float-right"
                  >
                    <BsTrash />
                  </Button>
                  <Link to={`/admin/category/${c.slug}`}>
                    <Button variant="warning" className="float-right mr-3">
                      <MdModeEdit />
                    </Button>
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminSubcategory;
