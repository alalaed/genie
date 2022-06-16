import { Badge } from "react-bootstrap";

const ShowStatusInfo = ({ order }) => {
  return (
    <>
      <Badge className=" bg-primary ">
        STATUS: <span className="ms-3">{order.orderStatus}</span>
      </Badge>
      <Badge className=" bg-secondary ms-3 ">
        Ordered on:
        <span className="ms-3">
          {new Date(order.paymentIntent.created * 1000).toLocaleString()}
        </span>
      </Badge>
    </>
  );
};

export default ShowStatusInfo;
