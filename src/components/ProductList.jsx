import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice.jsx";
import Navbar from "./Navbar.jsx";

const img = "https://via.placeholder.com/200x120";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 15, img },
    { id: 2, name: "Peace Lily", price: 20, img },
    { id: 3, name: "Spider Plant", price: 12, img },
    { id: 4, name: "ZZ Plant", price: 18, img },
    { id: 5, name: "Pothos", price: 10, img },
    { id: 6, name: "Rubber Plant", price: 22, img },
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 25, img },
    { id: 8, name: "Tulip", price: 30, img },
    { id: 9, name: "Sunflower", price: 20, img },
    { id: 10, name: "Lavender", price: 28, img },
    { id: 11, name: "Hibiscus", price: 18, img },
    { id: 12, name: "Jasmine", price: 16, img },
  ],
  Succulents: [
    { id: 13, name: "Aloe Vera", price: 10, img },
    { id: 14, name: "Cactus", price: 12, img },
    { id: 15, name: "Echeveria", price: 14, img },
    { id: 16, name: "Haworthia", price: 13, img },
    { id: 17, name: "Sedum", price: 11, img },
    { id: 18, name: "Crassula", price: 15, img },
  ],
};

function ProductList({ goHome, goCart }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  const add = (p) => {
    dispatch(addItem(p));
    setAdded((prev) => [...prev, p.id]);
  };

  return (
    <div>
      <Navbar onHome={goHome} onPlants={() => {}} onCart={goCart} />
      <div className="container">
        {Object.keys(plants).map((cat) => (
          <div className="category" key={cat}>
            <h3>{cat}</h3>
            <div className="grid">
              {plants[cat].map((p) => (
                <div className="card" key={p.id}>
                  <img src={p.img} alt={p.name} />
                  <p><b>{p.name}</b></p>
                  <p>₹{p.price}</p>
                  <button
                    disabled={added.includes(p.id)}
                    onClick={() => add(p)}
                  >
                    {added.includes(p.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
