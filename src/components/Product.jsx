import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { BsCartPlus, BsHeart } from "react-icons/bs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getSingleProduct } from "../utils/productCreate";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRatings from "react-star-ratings";
import RatingModal from "./RatingModal";

const Product = () => {
  let params = useParams();
  const [product, setProduct] = useState({});
  const initState = { publicUrl: "", url: "" };
  const [images, setImages] = useState([{ initState }]);

  useEffect(() => {
    loadSingleProduct();
  }, []);

  const loadSingleProduct = () => {
    getSingleProduct(params.slug).then((p) => {
      setImages(p.data.images);
      setProduct(p.data);
    });
  };

  return (
    <Container className="my-5">
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
              <div className="d-flex justify-content-center mt-3">
                <StarRatings
                  name={product._id}
                  numberOfStars={5}
                  rating={2}
                  changeRating={(newRating, name) =>
                    console.log(newRating, name)
                  }
                  isSelectable={true}
                  starRatedColor="gold"
                />
              </div>
            </div>

            <div className=" mt-auto">
              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <button className="addToCart bg-dark py-2 px-3 ">
                  <BsCartPlus style={{ width: "2rem", height: "2rem" }} />
                </button>

                <button className="addToCart bg-dark py-2 px-3 ">
                  <BsHeart style={{ width: "2rem", height: "2rem" }} />
                </button>

                <RatingModal className="addToCart" />

                <h3>{product.price},-</h3>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
      <Row>
        <h3>Related Products</h3>
      </Row>
    </Container>
  );
};

export default Product;
