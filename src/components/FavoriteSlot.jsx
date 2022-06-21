import { Card, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../utils/userCart";

const FavoriteSlot = ({
  title,
  image,
  price,
  description,
  id,
  loadWishlist,
  token,
  slug,
}) => {
  const handleRemove = (productId) =>
    removeFromWishlist(productId, token).then((res) => {
      console.log("i am firing");
      loadWishlist();
    });
  return (
    <Card className="w-100 all-product-card flex-column">
      <Card.Img variant="top" src={image} className="product-list-image mt-2" />
      <Card.Body>
        <Card.Title className="line-clamp-title">{title}</Card.Title>
        <Card.Text className="line-clamp-text">{description}</Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-between align-items-center px-2 py-2">
        <div>
          <Button variant="danger" onClick={() => handleRemove(id)}>
            <BsTrash />
          </Button>
        </div>
        <h5 className="mb-0">{price}€</h5>
      </div>
    </Card>
  );
};

export default FavoriteSlot;
