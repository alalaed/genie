import { Card, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const FavoriteSlot = ({
  title,
  image,
  price,
  description,
  handleRemove,
  id,
  token,
  slug,
}) => {
  // const handleRemove = () => {
  //   if (window.confirm()) deleteProduct(id, token);
  //   console.log(id);
  // };
  return (
    <Card className="w-100 all-product-card flex-column">
      <Card.Img variant="top" src={image} className="product-list-image mt-2" />
      <Card.Body>
        <Card.Title className="line-clamp-title">{title}</Card.Title>
        <Card.Text className="line-clamp-text">{description}</Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-between align-items-center px-2 py-2">
        <div>
          <Button variant="danger" onClick={() => handleRemove(id, token)}>
            <BsTrash />
          </Button>
        </div>
        <h5 className="mb-0">{price}€</h5>
      </div>
    </Card>
  );
};

export default FavoriteSlot;
