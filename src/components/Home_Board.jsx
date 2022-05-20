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
            onClick={() => navigate(`/products${data._id}`)}
          >
            <Link to={"/products"} style={{ textDecoration: "none" }}>
              <img
                className="d-block w-100 rounded overflowHidden"
                src="https://picsum.photos/800/400"
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>{data.name}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Home_Board;
