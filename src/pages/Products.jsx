import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css"

const Products = () => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      const allNotes = response.data;
      console.log(allNotes);
      setNotes(allNotes);
    });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {notes.length
          ? notes.map((product, idx) => (
              <div class="product" key={idx}>
                <h3>{product.title}</h3>
                <h4>{product.cost}</h4>
                <img src={product.image} alt="Card image cap" />
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Products;
