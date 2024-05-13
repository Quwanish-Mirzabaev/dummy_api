import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import SearchStore from "./SearchStore";
import axios from "axios";
import "./Homepage.css"
import { Link } from "react-router-dom";

const src = "https://dummyjson.com/products";

const Homepage = observer(() => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(src).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <>
      <div className="products">
        <div>
        <div className="search">
      <input
        type="text"
        placeholder="Search User"
        value={SearchStore.search}
        onChange={(e) => SearchStore.setSearch(e.target.value)}
      />
    </div>
        </div>

        {products
          .filter((product) =>
            SearchStore.search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(SearchStore.search)
          )
          .map((product) => (
            <Link to={`/product/${product.id}`}>
              <div className="card" key={product.id}>
                <div className="img-div">
                  <img className="product-img" src={product.images[2]} alt="" />
                </div>
                <p className="Product">{product.title}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
});

export default Homepage;