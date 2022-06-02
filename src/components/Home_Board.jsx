import { Carousel, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Home_Board = ({ products }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Carousel>
        {products.map((data) => (
          <Carousel.Item
            key={data._id}
            onClick={() => navigate(`/products/${data._id}`)}
          >
            <div className="d-flex justify-content-center">
              <img
                className="d-block w-100 rounded overflowHidden carouselImage"
                src={data.images[0].url}
                alt="First slide"
              />

              {/* <div className="d-flex flex-column align-items-center justify-content-center">
                <h2>{data.title}</h2>
                <h3>{data.price}€</h3>
              </div> */}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Home_Board;
