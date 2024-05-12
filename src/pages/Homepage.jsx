import { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.css";
import { Link } from "react-router-dom";

const src = "https://dummyjson.com/products";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(src).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  console.log(search);

  return (
    <>
      <div className="products">
        <div>
          <div className="search">
            <input
              type="text"
              placeholder="Search User"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {products
          .filter((product) =>
            search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search)
          )
          .map((product) => (
            <Link to={`/product/${product.id}`}>
              <div className="card">
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
}

export default Homepage;
