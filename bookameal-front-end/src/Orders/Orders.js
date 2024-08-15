import React from "react";
import "./Orders.css";

const Orders = () => {
  // Hardcoded cartItems for demonstration
  const cartItems = [
    {
      id: 1,
      name: "Item 1",
      description: "Description for item 1",
      price: 10.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description for item 2",
      price: 15.0,
      quantity: 1,
    },
  ];

  const updateQuantity = (id, quantity) => {
    // Dummy function for updating quantity
    console.log(`Update quantity for item ${id} by ${quantity}`);
  };

  const removeFromCart = (id) => {
    // Dummy function for removing item
    console.log(`Remove item ${id} from cart`);
  };

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
    <div className="order-card">
      <div className="order-row">
        <div className="content">
          <div className="order-col-md-8 order-cart">
            <div className="order-title">
              <div className="order-row">
                <div className="order-col">
                  <h4>
                    <b>Your Orders</b>
                  </h4>
                </div>
                <div className="order-col align-self-center text-right text-muted">
                  {cartItems.length} items
                </div>
              </div>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="order-row border-top border-bottom">
                <div className="order-row order-main align-items-center">
                  <div className="order-col-2">
                    {/* Image removed */}
                  </div>
                  <div className="order-col">
                    <div className="order-row text-muted">{item.name}</div>
                    <div className="order-row">{item.description}</div>
                  </div>
                  <div className="order-col">
                    <a href="#" onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </a>
                    <a href="#" className="border">
                      {item.quantity}
                    </a>
                    <a href="#" onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </a>
                  </div>
                  <div className="order-col">
                    &euro; {item.price.toFixed(2)}
                    <span
                      className="order-close"
                      onClick={() => removeFromCart(item.id)}
                    >
                      &#10005;
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="order-back-to-shop">
              <a href="#">Back to menu</a>
              {/* <span className="text-muted">Back to shop</span> */}
            </div>
          </div>
          <div className="order-col-md-4 order-summary">
            <div>
              <h5>
                <b>Order Summary</b>
              </h5>
            </div>
            <hr />
            <div className="order-row">
              <div className="order-col" style={{ paddingLeft: 0 }}>
                ITEMS {cartItems.length}
              </div>
              <div className="order-col text-right">
                &euro; {calculateTotal()}
              </div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">
                  Standard-Delivery - &euro;5.00
                </option>
              </select>
              <p>OFFER CODE</p>
              <input id="order-code" placeholder="Enter your code" />
            </form>
            <div
              className="order-row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="order-col">TOTAL PRICE</div>
              <div className="order-col text-right">
                &euro; {parseFloat(calculateTotal()) + 5.0}
              </div>
            </div>
            <button className="order-btn" onClick={handleCheckout}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
