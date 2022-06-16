import { BsCartPlus, BsHeartFill } from "react-icons/bs";
import { Container } from "react-bootstrap";

const ProductSide = () => {
  return (
    <Container className="h-100">
      <div className=" mb-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          distinctio dolore vel! Vel vitae placeat omnis molestias a, cum facere
          ut repellat numquam alias? Alias autem in quibusdam voluptate iusto.
        </p>
      </div>

      <div className=" mt-auto">
        <hr />
        <div className="d-flex justify-content-between">
          <button className="addToCart bg-dark py-2 px-4 ">
            Add to Basket{" "}
            <BsCartPlus style={{ width: "2rem", height: "2rem" }} />
          </button>

          <p>350,-</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductSide;
