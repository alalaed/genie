import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductFilterCard = ({ title, price, description, image, slug }) => {
  return (
    <Card className="w-100 all-product-card flex-column">
      <Link
        to={`/product/${slug}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card.Img
          variant="top"
          src={image}
          className="product-list-image mt-2"
        />
        <Card.Body>
          <Card.Title className="line-clamp-title">{title}</Card.Title>
          <Card.Text className="line-clamp-text">{description}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between align-items-center px-2 py-2">
          <h5 className="mb-0">{price}€</h5>
        </div>
      </Link>
    </Card>
  );
};

export default ProductFilterCard;
