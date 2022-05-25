import { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { createProduct } from "../../utils/productCreate";
import { getCategories } from "../../utils/category";
import { getSubcategories } from "../../utils/subcategory";
import FileUpload from "../../components/FileUpload";

const ProductCreate = () => {
  const [disabled, setDisabled] = useState(true);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const initState = {
    title: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    subcategory: "",
    shipping: "",
    quantity: "",
    images: [],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Apple", "Samsung", "Microsoft", "lenovo", "Asus"],
    color: "",
    brand: "",
  };

  const {
    title,
    description,
    price,
    categories,
    category,
    subcategory,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
  } = initState;

  const [values, setValues] = useState(initState);
  const token = useSelector((state) => state.userReducer?.accessToken);

  const loadCategories = async () => {
    const res = await getCategories();
    setValues({ ...values, categories: res.data });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
    console.log("this is the subcategory-----" + values.subcategory);
  };

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    createProduct(values, token)
      .then((res) => {
        window.alert(`${res.data.title} is created!`);
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleCategory = async (e) => {
    e.preventDefault();
    setValues({ ...values, category: e.target.value });
    const subRes = await getSubcategories(e.target.value);
    console.log("id?------" + values.category);
    setSubcategories(subRes.data);

    if (subRes.data.length > 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleSubcategory = async (e) => {
    e.preventDefault();
    setValues({ ...values, subcategory: e.target.value });
  };
  return (
    <Container>
      <Row>
        <Col md={2} className="d-none d-md-block">
          <AdminSidebar />
        </Col>
        <Col md={10} className="mt-3">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={8}>
                <Form.Group
                  className="mb-3"
                  name="title3213242"
                  controlId="title"
                  onChange={handleChange}
                  value={title}
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="string" placeholder="Enter Title" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="brand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="d-block"
                    onChange={handleChange}
                  >
                    <option>Please Select</option>
                    {brands.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="description"
              value={description}
              onChange={handleChange}
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <FileUpload
              values={values}
              setValues={setValues}
              setLoading={setLoading}
            />

            <Row>
              <Col md={6}>
                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="d-block mb-3"
                    onChange={handleCategory}
                  >
                    <option>Please Select</option>
                    {values.categories.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="subcategory">
                  <Form.Label>Subcategory</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="d-block mb-3"
                    onChange={handleSubcategory}
                    disabled={disabled}
                  >
                    <option>
                      {disabled ? (
                        <>Sorry no Subcategories</>
                      ) : (
                        <>Please Select</>
                      )}
                    </option>
                    {subcategories.map((sub) => (
                      <option key={sub._id} value={sub._id}>
                        {sub.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group
                  className="mb-3"
                  controlId="price"
                  value={price}
                  onChange={handleChange}
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter Price" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group
                  className="mb-3"
                  controlId="quantity"
                  value={quantity}
                  onChange={handleChange}
                >
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" placeholder="Enter Quantity" />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId="color">
                  <Form.Label>Color</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="d-block"
                    onChange={handleChange}
                  >
                    <option>Please Select</option>
                    {colors.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="shipping">
                  <Form.Label>Shipping</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="d-block"
                    onChange={handleChange}
                  >
                    <option>Please Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="justify-content-center mt-3">
              <Button variant="success" type="submit" className="w-50 ">
                Submit Product
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCreate;
