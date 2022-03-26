import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "react-use-cart";

const Products = (props) => {
  const { addItem } = useCart();
  return (
    <div className="main-box">
      <Card className="main-card">
        <Card.Img variant="top" src={props.image} style={{ height: "250px" }} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Button variant="primary" onClick={() => addItem(props.item)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
