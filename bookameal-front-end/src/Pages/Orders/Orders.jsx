import React, { useContext } from "react";
import { CartContext } from "./Order";

const Orders = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    alert("Redirecting to payment page...");
    window.open("payment.html", "Payment", "width=800,height=600");
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Your Order</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {cartItems.length} items
              </div>
            </div>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img className="img-fluid" src={item.img} alt={item.name} />
                </div>
                <div className="col">
                  <div className="row text-muted">{item.name}</div>
                </div>
                <div className="col">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className="border">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div className="col">
                  &euro; {item.price.toFixed(2)}
                  <span
                    className="close"
                    onClick={() => removeFromCart(item.id)}
                  >
                    &#10005;
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="back-to-shop">
            <a href="#">&leftarrow;</a>
            <span className="text-muted">Back to menu</span>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: 0 }}>
              ITEMS {cartItems.length}
            </div>
            <div className="col text-right">&euro; {calculateTotal()}</div>
          </div>
          <div
            className="row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">&euro; {calculateTotal()}</div>
          </div>
          <button className="btn" onClick={handleCheckout}>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
