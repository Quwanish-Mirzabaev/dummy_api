import { Link } from "react-router-dom";
import "./Checkout.css";
import cartStore from "./CartStore";
const Checkout = () => {
    const handleBuy = () => {
        cartStore.deleteProducts();
      }
      
  return (

    <div className="container">
      <h1>Checkout</h1>

      <div className="checkout-form">
        <form>
          <label className="label-imya"  htmlFor="name">Имя:</label>
          <input type="text" name="name" required />
<label>Номер</label>
<input className="label-imya" id='number' name='number' type='phone' placeholder='+998'/>
            <label>На этот адрес электронной почты будут отправлены сведения о заказе и новости по нему.</label>
          <label className="label-email" htmlFor="email">Email:</label>
          <input type="email" name="email" required />
          <label className="label-gorod" >Город</label>
          <select>
            <option>Республика Каракалпакстан</option>
            <option>Хива</option>
            <option>Андижанская область</option>
            <option>Бухарская область</option>
            <option>Джизакская область</option>
            <option>Кашкадарьинская область</option>
            <option>Навоийская область</option>
            <option>Самаркандская область область</option>
            <option>Сурхандарьинская область</option>
            <option>Сырдарьинская область</option>
            <option>Ташкентская область</option>
            <option>Ферганская область</option>
            <option>Хорезмская область</option>
            <option>Ташкент</option>
            <option>Хорезмская область</option> 
          </select>
          <label  className="label-addres">Адрес:</label>
          <input type="text" name="address" required />

          <label className="label-oplata">Способ оплаты:</label>
          <select id="payment" name="payment">
            <option value="card">Карта</option>
            <option value="cash">Наличные</option>
          </select>
          <Link to="/">
          <button onClick={handleBuy} type="submit">Оплатить</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Checkout;
