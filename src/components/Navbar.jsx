import React from "react";
import { useSelector } from "react-redux";

function Navbar({ onHome, onPlants, onCart }) {
  const items = useSelector((s) => s.cart.items);
  const count = items.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="navbar">
      <h2>🌿 Paradise Nursery</h2>
      <div className="nav-links">
        <button onClick={onHome}>Home</button>
        <button onClick={onPlants}>Plants</button>
        <button onClick={onCart}>Cart ({count})</button>
      </div>
    </div>
  );
}

export default Navbar;
