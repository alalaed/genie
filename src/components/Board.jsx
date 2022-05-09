import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <Link to={"/product"} style={{ textDecoration: "none" }}>
            <img
              className="d-block w-100 rounded overflowHidden"
              src="https://picsum.photos/800/400"
              alt="First slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/product"} style={{ textDecoration: "none" }}>
            <img
              className="d-block w-100 rounded overflowHidden"
              src="https://picsum.photos/800/400"
              alt="First slide"
            />
          </Link>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/product"} style={{ textDecoration: "none" }}>
            <img
              className="d-block w-100 rounded overflowHidden"
              src="https://picsum.photos/800/400"
              alt="First slide"
            />
          </Link>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Board;
