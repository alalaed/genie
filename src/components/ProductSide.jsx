import { BsCartPlus, BsHeartFill } from "react-icons/bs";

const ProductSide = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-auto">
        <p className="pr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          distinctio dolore vel! Vel vitae placeat omnis molestias a, cum facere
          ut repellat numquam alias? Alias autem in quibusdam voluptate iusto.
        </p>
        <p>350,-</p>
      </div>
      <div className="justify-content-between">
        <hr />
        <div className="d-flex justify-content-between">
          <button className="addToCart bg-dark py-2 px-3 ">
            Add to Basket{" "}
            <BsCartPlus style={{ width: "2rem", height: "2rem" }} />
          </button>
          <button className="addToCart bg-dark py-2 px-3 ">
            <BsHeartFill
              style={{
                //   color: "red",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSide;
