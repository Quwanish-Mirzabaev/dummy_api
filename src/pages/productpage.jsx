import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productpage.css"
import cartStore from "./CartStore";
function Productpage() {
  const [product, setProduct] = useState([]);

  const handleAddToCart = (item) => {
    cartStore.addToCart(item);
  };
  const { Id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${Id}`)
      .then((res) => {
        setProduct([res.data]);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке товаров:", error);
      });
  }, [Id]);

  return (
    <div className="product-i">

       {product.map((item) => {
         return (
        

          <div className="product-div ">
            <div className="product-img-div">
              <img className="product-img" src={item.image} alt=""></img>
            </div>
            <div className="product-inf">
              <div className="product-title">
                <span className="title-span" >{item.title}</span>
                <div className="product-categor">
                  <span>category: {item.category}</span>
                  <span>rate: {item.rating.rate}</span>
                 </div>
              </div>
              <div className="description">

              <b>
                <span className="description-title">Description</span>
                </b>
              <span className="product-descrip" >{item.description}</span>
             
              </div>
              <div className="product-price">
                <span>{item.price}$</span>
                <button onClick={()=>handleAddToCart(item)} className="add-cart">Add to cart</button>
              </div>
            </div>
          </div>
         );
      })}
      </div>
   );
}

export default Productpage;
