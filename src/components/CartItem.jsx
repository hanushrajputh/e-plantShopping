import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice.jsx";
import Navbar from "./Navbar.jsx";

function CartItem({ goPlants, goHome }) {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();

  const inc = (it) => dispatch(updateQuantity({ id: it.id, quantity: it.quantity + 1 }));
  const dec = (it) => {
    if (it.quantity > 1) {
      dispatch(updateQuantity({ id: it.id, quantity: it.quantity - 1 }));
    }
  };

  const total = items.reduce((acc, it) => acc + it.price * it.quantity, 0);

  return (
    <div>
      <Navbar onHome={goHome} onPlants={goPlants} onCart={() => {}} />
      <div className="container">
        <h2>Shopping Cart</h2>

        {items.length === 0 && <p>Your cart is empty.</p>}

        {items.map((it) => (
          <div className="cart-item" key={it.id}>
            <img src={it.img || "https://via.placeholder.com/100"} alt={it.name} />
            <div>
              <p><b>{it.name}</b></p>
              <p>Unit Price: ₹{it.price}</p>
              <div>
                <button onClick={() => inc(it)}>+</button>
                <button onClick={() => dec(it)}>-</button>
                <span style={{ marginLeft: 8 }}>Qty: {it.quantity}</span>
              </div>
              <p>Total: ₹{it.price * it.quantity}</p>
            </div>
            <div>
              <button onClick={() => dispatch(removeItem(it.id))}>Delete</button>
            </div>
          </div>
        ))}

        <h3>Total Cart Amount: ₹{total}</h3>

        <button onClick={() => alert("Coming Soon")}>Checkout</button>
        <button onClick={goPlants}>Continue Shopping</button>
      </div>
    </div>
  );
}

export default CartItem;
