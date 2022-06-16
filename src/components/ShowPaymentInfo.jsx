import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { BsInfoCircleFill } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";

const ShowPaymentInfo = ({ order }) => {
  const role = useSelector((state) => state.userReducer.user.role);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Order Info</Popover.Header>
      <Popover.Body>
        <div>
          {role === "User" ? (
            <p>
              <span className="badge bg-primary ">
                STATUS: {order.orderStatus}
              </span>
            </p>
          ) : (
            <ListGroup className="text-black">
              <ListGroup.Item>
                <span>Order Id: {order.paymentIntent.id}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>
                  Amount:
                  {(order.paymentIntent.status === "Cash on delivery"
                    ? (order.paymentIntent.amount /= 10)
                    : (order.paymentIntent.amount /= 10)
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>Payment: {order.paymentIntent.status.toUpperCase()}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>
                  Ordered on:
                  {new Date(
                    order.paymentIntent.created * 1000
                  ).toLocaleString()}
                </span>
              </ListGroup.Item>
            </ListGroup>

            // <p className="text-black">
            //   <span>Order Id: {order.paymentIntent.id}</span>
            //   {" / "}
            //   <span>
            //     Amount:{"  "}
            //     {(order.paymentIntent.status === "Cash on delivery"
            //       ? (order.paymentIntent.amount /= 10)
            //       : (order.paymentIntent.amount /= 10)
            //     ).toLocaleString("en-US", {
            //       style: "currency",
            //       currency: "EUR",
            //     })}
            //   </span>

            //   {" / "}
            //   <span>Payment: {order.paymentIntent.status.toUpperCase()}</span>
            //   {" / "}
            //   <span>
            //     Ordered on:{" / "}
            //     {new Date(order.paymentIntent.created * 1000).toLocaleString()}
            //   </span>
            //   {" / "}
            //   <span className="badge bg-primary ">
            //     STATUS: {order.orderStatus}
            //   </span>
            // </p>
          )}
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button className="px-0 py-0">
        <BsInfoCircleFill
          style={{ color: "white", height: "2rem", width: "2rem" }}
        />
      </Button>
    </OverlayTrigger>
  );
};

export default ShowPaymentInfo;
