import { Container, Row, Col, ListGroup, Button, Modal } from "react-bootstrap";
import { BsCartPlus, BsHeart } from "react-icons/bs";
import { RiStarLine } from "react-icons/ri";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getSingleProduct } from "../utils/productCreate";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRatings from "react-star-ratings";
import { useSelector, useDispatch } from "react-redux";
import LoginModal from "./LoginModal";
import { productRate } from "../utils/productCreate";
import { average } from "../utils/averageRating";
import { getRelatedProducts } from "../utils/productCreate";
import _ from "lodash";
import { Tooltip } from "antd";

const Product = () => {
  let params = useParams();

  const [product, setProduct] = useState({});
  const initState = { publicUrl: "", url: "" };
  const [images, setImages] = useState([{ initState }]);
  const [show, setShow] = useState(false);
  const [rate, setRate] = useState(0);
  const [related, setRelated] = useState([]);
  const [tooltip, setTooltip] = useState("Click to add");

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((state) => state.userReducer?.user);
  const token = useSelector((state) => state.userReducer?.accessToken);
  const cart = useSelector((state) => state.cartReducer);

  useEffect(() => {
    loadSingleProduct();
  }, [params.slug]);

  useEffect(() => {
    if (product.ratings && user) {
      let alreadyRated = product.ratings.find(
        (ele) => ele.postedBy.toString() === user._id.toString()
      );
      alreadyRated && setRate(alreadyRated.star);
    }
  });

  const loadSingleProduct = () => {
    getSingleProduct(params.slug).then((p) => {
      setImages(p.data.images);
      setProduct(p.data);
      getRelatedProducts(p.data._id).then((r) => {
        setRelated(r.data);
      });
    });
  };

  const onStarClick = (newRating, name) => {
    setRate(newRating);
    productRate(user._id, name, newRating, token).then((res) => {
      console.log("rated" + res.data);
      loadSingleProduct();
    });
  };

  const handleAddToCart = () => {
    let cart = [];
    // useful check for future nextJS version if SSR
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      console.log("unique", unique);
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  return (
    <Container fluid className="my-5">
      <Row className="my-5">
        <Col xs={12} lg={7}>
          <Carousel>
            {images.length > 0 ? (
              images.map((img) => (
                <img
                  src={img.url}
                  className="displayProduct rounded"
                  key={img.public_id}
                  alt=""
                />
              ))
            ) : (
              <img
                src="https://www.tibs.org.tw/images/default.jpg"
                alt=""
                className="displayProduct"
              />
            )}
          </Carousel>
        </Col>
        <Col xs={12} lg={5}>
          <Container className="sideProductInfo d-flex flex-column">
            <div>
              <h2 className="my-2">{product.title}</h2>
              {product && product.ratings && product.ratings.length > 0 ? (
                average(product)
              ) : (
                <p bg="danger">"No rating yet !"</p>
              )}
              <p>{product.description}</p>
              <ListGroup className="mt-3">
                <ListGroup.Item className="d-flex justify-content-between">
                  <div className="sideInfoList">Color :</div>
                  <div className="sideInfoList">{product.color}</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <div className="sideInfoList">Brand :</div>
                  <div className="sideInfoList">{product.brand}</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <div className="sideInfoList">Shipping :</div>
                  <div className="sideInfoList">{product.shipping}</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <div className="sideInfoList">Available :</div>
                  <div className="sideInfoList">{product.quantity}</div>
                </ListGroup.Item>
              </ListGroup>
              <div className="d-flex justify-content-center mt-3"></div>
              <hr />
              <div className="d-flex justify-content-center my-3">
                <h2>{product.price},-</h2>
              </div>
              <hr />
            </div>

            <div className=" mt-auto">
              <div className="d-flex justify-content-between align-items-center">
                <Tooltip title={tooltip}>
                  <button
                    className="addToCart bg-dark py-2 px-3 "
                    onClick={handleAddToCart}
                  >
                    <BsCartPlus style={{ width: "2rem", height: "2rem" }} />
                  </button>
                </Tooltip>

                <button className="addToCart bg-dark py-2 px-3 ">
                  <BsHeart style={{ width: "2rem", height: "2rem" }} />
                </button>

                <button
                  className="addToCart bg-dark py-2 px-3"
                  onClick={() => setShow(true)}
                >
                  <RiStarLine
                    onClick={handleShow}
                    style={{ width: "2rem", height: "2rem" }}
                  />
                </button>
                {user && token ? (
                  <>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Rate this product.</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <StarRatings
                          name={product._id}
                          numberOfStars={5}
                          rating={rate}
                          changeRating={onStarClick}
                          isSelectable={true}
                          starRatedColor="gold"
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Submit Rating
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                ) : (
                  <>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          You need to be logged in to rate this product.
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <LoginModal handleClose={handleClose} />
                      </Modal.Body>
                    </Modal>
                  </>
                )}
              </div>
            </div>
          </Container>
        </Col>
      </Row>
      <Row>
        <h3>Similar Products</h3>

        {related.length > 0
          ? related.map((data) => {
              return (
                <Col
                  xs={12}
                  md={4}
                  lg={4}
                  xl={2}
                  className="mt-3 "
                  key={data._id}
                >
                  <Link
                    to={`/product/${data.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={data.images[0].url}
                      className="salePic rounded border border-secondary px-3 shadow"
                      alt=""
                    />
                  </Link>
                </Col>
              );
            })
          : "Sorry, we don't have similar products!"}

        {}
      </Row>
    </Container>
  );
};

export default Product;
