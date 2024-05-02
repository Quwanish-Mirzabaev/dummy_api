import { makeAutoObservable } from "mobx";

class CartStore {
  cartItems = [];
  totalCartPrice = 0;
  totalAddedItems = 0;

  constructor() {
    makeAutoObservable(this);

    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.calculateTotalCartPrice();
    }
  }

  addToCart(item) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    this.totalAddedItems++;

    localStorage.setItem("totalAddedItems", this.totalAddedItems);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.calculateTotalCartPrice();
  }
  deleteCart() {
    this.cartItems = [];
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.calculateTotalCartPrice();
  }
  removeItem(id) {
    let removedItem = this.cartItems.find(item => item.id === id);
    let removedQuantity = +removedItem.quantity;
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  
    this.totalAddedItems -= removedQuantity;
  
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.calculateTotalCartPrice();
  }
  deleteProducts() {
    this.cartItems = [];
    this.totalCartPrice = 0;
    this.totalAddedItems = 0;
    
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    localStorage.setItem("totalAddedItems", this.totalAddedItems);
 
  }


  removeFromCart(id) {
    const index = this.cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.totalAddedItems--;
      }
    }

    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.calculateTotalCartPrice();
  }

  calculateTotalCartPrice() {
    this.totalCartPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
 



const cartStore = new CartStore();
export default cartStore;
