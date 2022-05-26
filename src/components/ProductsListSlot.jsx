import { Card, Button } from "react-bootstrap";

const ProductsListSlot = ({ title, image, price, description }) => {
  return (
    <Card className="w-100 all-product-card flex-column">
      <Card.Img variant="top" src={image} className="product-list-image mt-2" />
      <Card.Body>
        <Card.Title className="line-clamp-title">{title}</Card.Title>
        <Card.Text className="line-clamp-text">{description}</Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-between px-2 py-2">
        <Button variant="primary">Edit</Button>
        <h4>{price}€</h4>
      </div>
    </Card>
  );
};

export default ProductsListSlot;
