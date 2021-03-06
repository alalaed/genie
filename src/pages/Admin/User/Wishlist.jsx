import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserSidebar from "../../../components/UserSidebar";
import { getWishlist, removeFromWishlist } from "../../../utils/userCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { getWishlistProducts } from "../../../utils/userCart";
import FavoriteSlot from "../../../components/FavoriteSlot";

import ProductsListSlot from "../../../components/ProductsListSlot";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const token = useSelector((state) => state.userReducer.accessToken);

  useEffect(() => {
    console.log(token);
    loadWishlist();
    // eslint-disable-next-line
  }, []);

  const loadWishlist = () =>
    getWishlist(token).then((res) => {
      setWishlist(res.data.wishlist);
      console.log(res.data.wishlist);
    });

  const handleRemove = (productId) =>
    removeFromWishlist(productId, token).then((res) => {
      loadWishlist();
    });

  return (
    <Container fluid className="px-0">
      <Row>
        <Col md={2}>
          <UserSidebar />
        </Col>
        <Col md={10} className="px-5 mt-5">
          <h4>Favourites</h4>
          <Row>
            {wishlist?.map((p) => (
              <Col md={3}>
                <FavoriteSlot
                  title={p.title}
                  image={p.images[0].url}
                  key={p._id}
                  price={p.price}
                  description={p.description}
                  id={p._id}
                  loadWishlist={loadWishlist}
                  token={token}
                  slug={p.slug}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Wishlist;
