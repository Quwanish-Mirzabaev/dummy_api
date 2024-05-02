import React from "react";
import { observer } from "mobx-react";
import cartStore from "./CartStore";
import "./Cart.css";
import { Link } from "react-router-dom";


const Cart = observer(() => {
  const cartItems = cartStore.cartItems;
  const totalCartPrice = cartStore.totalCartPrice;

  const handleAddToCart = (item) => {
    cartStore.addToCart(item);
  };

  const handleRemoveFromCart = (id) => {
    cartStore.removeFromCart(id);
  };

  const deleteCart = () => {
    cartStore.deleteCart();
  };

  const removeItem = (id) => {
    cartStore.removeItem(id);
  };
  const handleBuy = () => {
    cartStore.deleteProducts();
  }
  return (
    <div className="cart">
      <p className="total">Total price: ${totalCartPrice.toFixed(2)}</p>
      <button className="btn-delete" onClick={() => deleteCart()}>
        Очистить Корзину
      </button>
     <Link to="/Chechout">
      <button onClick={()=>handleBuy()} className="btn-buy">Buy</button>
     </Link> 
      {cartItems.map((article) => {
        return (
          <div className="cart-item" key={article.id}>
            <div className="product-info">
              <img className="product-img" src={article.image} alt="" />
            </div>
            <p>Quanity:{article.quantity}</p>
            <p>${article.price}</p>

            <div className="product-tit">
              <p className="product-title">{article.title}</p>
            </div>
            <div className="btn-group">
              <button
                className="btn-minus"
                onClick={() => handleRemoveFromCart(article.id)}
              >
                -
              </button>
              <button
                className="btn-plus"
                onClick={() => handleAddToCart(article)}
              >
                +
              </button>
              <button
                className="btn-remove"
                onClick={() => removeItem(article.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Cart;
