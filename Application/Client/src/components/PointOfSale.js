import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/PointOfSale.css';

const PointOfSalePage = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  // dummy inventory
  const [inventory, setInventory] = useState([
    { product: 'Apples', quantity: 10, price: 8.5 },
    { product: 'Oranges', quantity: 20, price: 4 },
    { product: 'Bananas', quantity: 15, price: 3 },
  ]);

  const handleAddToCart = (event, item) => {
    event.preventDefault();
    const existingItem = cart.find((cartItem) => cartItem.product === item.product);
    const totalQuantityInCart = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    if (existingItem) {
      if (totalQuantityInCart + 1 > item.quantity) {
        alert('Not enough stock to add this item to the cart');
        return;
      }
      const updatedCart = cart.map((cartItem) =>
        cartItem.product === item.product
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      if (totalQuantityInCart + 1 > item.quantity) {
        alert('Not enough stock to add this item to the cart');
        return;
      }
      setCart([...cart, { product: item.product, quantity: 1, price: item.price }]);
    }
  
    // Prevent adding more items to the cart than what is in stock
    const inventoryItem = inventory.find((inventoryItem) => inventoryItem.product === item.product);
    if (inventoryItem.quantity < totalQuantityInCart + 1) {
      alert(`Not enough stock to add this item to the cart. Only ${inventoryItem.quantity} in stock.`);
      handleDeleteFromCart(item.product);
      return;
    }
  };
  
  const handleDeleteFromCart = (productToDelete) => {
    const updatedCart = cart.map((item) => {
      if (item.product === productToDelete.product && item.quantity >= 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      } else {
        return item;
      }
    });
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const handleCheckout = () => {
    // Create a copy of the inventory array
    const updatedInventory = [...inventory];
    
    // Update the inventory by subtracting the quantity of each cart item from the inventory quantity
    for (const item of cart) {
      const inventoryItem = updatedInventory.find((inventoryItem) => inventoryItem.product === item.product);
      inventoryItem.quantity -= item.quantity;
    }
  
    // Set the updated inventory and clear the cart
    setInventory(updatedInventory);
    setCart([]);
  }  

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };
  

  return (
    <div className="point-of-sale-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1 className="point-of-sale-header">Point of Sale</h1>
      <table className="point-of-sale-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* map over inventory data and display it here */}
          {inventory.map((item) => (
            <tr key={item.product}>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button className="add-to-cart-button" onClick={(event) => handleAddToCart(event, item)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart">
        <h2>Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.product}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
                <td>
                  <button className="remove-from-cart-button" onClick={() => handleDeleteFromCart(item)}>
                    Remove from Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
          <p>Total Price: {calculateTotalPrice()}</p>
          <button className="checkout-button" onClick={() => handleCheckout()}>Checkout</button>
        </div>
      </div>
    </div>
  );
}  

export default PointOfSalePage;