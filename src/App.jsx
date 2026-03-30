import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";

function App() {
  const [page, setPage] = useState("home"); // home | plants | cart

  return (
    <div>
      {page === "home" && (
        <div className="landing">
          <div className="center-box">
            <h1>Welcome to Paradise Nursery</h1>
            <button onClick={() => setPage("plants")}>Get Started</button>
          </div>
        </div>
      )}

      {page === "plants" && (
        <ProductList goHome={() => setPage("home")} goCart={() => setPage("cart")} />
      )}

      {page === "cart" && (
        <CartItem goPlants={() => setPage("plants")} goHome={() => setPage("home")} />
      )}
    </div>
  );
}

export default App;
