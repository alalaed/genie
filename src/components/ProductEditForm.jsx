import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import FileUpload from "./FileUpload";

const ProductEditForm = ({
  values,
  handleCategory,
  handleSubcategory,
  handleSubmit,
  handleChange,
  categories,
  subcategories,
  disabled,
  loading,
  setLoading,
  setValues,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={8}>
          <Form.Group
            className="mb-3"
            controlId="title"
            onChange={handleChange}
            value={values.title}
          >
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="string"
              defaultValue={values.title}
              placeholder="Enter Title"
            />
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
              <option value={values.brand}>{values.brand}</option>
              {values.brands.map((b) => {
                if (b !== values.brand) {
                  return (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  );
                }
              })}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          defaultValue={values.description}
          value={values.description}
          onChange={handleChange}
        />
      </Form.Group>
      {loading ? (
        <Container className="d-flex w-100 justify-content-center my-3">
          <Spinner animation="grow" className="mx-4" size="sm" />
          <Spinner animation="grow" className="mx-4" size="sm" />
          <Spinner animation="grow" className="mx-4" size="sm" />
          <Spinner animation="grow" className="mx-4" size="sm" />
        </Container>
      ) : (
        <></>
      )}
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
              {categories.map((c) => {
                values.category && (
                  <option value={values.category._id}>
                    {values.category.name}
                  </option>
                );

                // if (c.name !== values.category.name)
                //   return (
                //     <option key={c._id} value={c._id}>
                //       {c.name}
                //     </option>
                //   );
              })}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="subcategory">
            <Form.Label>Subcategory</Form.Label>
            <Form.Select
              disabled={disabled}
              aria-label="Default select example"
              className="d-block mb-3"
              onChange={handleSubcategory}
              defaultValue={values.category._id}
            >
              {values.subcategory && (
                <option value={values.subcategory._id}>
                  {values.subcategory.name}
                </option>
              )}
              {subcategories.map((sub) => {
                if (sub.name !== values.subcategory.name)
                  return (
                    <option key={sub._id} value={sub._id}>
                      {sub.name}
                    </option>
                  );
              })}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              onChange={handleChange}
              value={values.price}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Quantity"
              onChange={handleChange}
              defaultValue={values.quantity}
              value={values.quantity}
            />
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
              <option>{values.color}</option>
              {values.colors.map((c) => {
                if (c !== values.color) {
                  return (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  );
                }
              })}
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
              <option>{values.shipping}</option>
              {values.shippingArray.map((s) => {
                if (s !== values.shipping) {
                  return (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  );
                }
              })}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-center mt-3">
        <Button variant="success" type="submit" className="w-50 ">
          Apply Changes
        </Button>
      </Row>
    </Form>
  );
};

export default ProductEditForm;
