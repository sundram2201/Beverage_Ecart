import React from "react";
import { useCart } from "react-use-cart";
import "../styles/index.css";
import Products from "./Products";
import { Data } from "./Data";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    isEmpty,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
    getTotals,
    cartTotal,
  } = useCart();

  if (isEmpty)
    return (
      <h1
        className="emp-box"
        style={{ textAlign: "center", margin: "20px 0px" }}
      >
        Uh Oh! Looks like Your list is Empty
      </h1>
    );

  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <h1 className="item-box">Your Cart</h1>
          <Link to="/" className="con-shop">
            <span>&#8249;</span>
            Continue Shopping
          </Link>
          <div className="col-11 100w">
            <div className="main-list">
              <div className="fav-list">
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      {item.name} - <b>${item.price}</b>
                      <span>&nbsp;&nbsp;</span>
                      <button
                        className="btn btn-primary mr-10"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>&nbsp;&nbsp;</span>
                      {item.quantity}
                      <span>&nbsp;&nbsp;</span>
                      <button
                        className="btn btn-primary mr-10"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{ float: "right" }}
                        className="btn btn-primary mr-10"
                      >
                        Clear Item
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <p>{getTotals}</p>
              <p>
                Total items : <b>{totalItems}</b>
              </p>

              <p>
                Total Amount : <b>${cartTotal}</b>
              </p>
            </div>
            <button
              className="btn btn-primary mr-10"
              onClick={() => emptyCart()}
            >
              Clear All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
