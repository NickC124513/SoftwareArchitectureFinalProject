import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/InventoryManager.css';

const InventoryPage = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const [editedProduct, setEditedProduct] = useState(null);

  const navigate = useNavigate();

  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setInventory(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [editedProduct, inventory]);

  const handleAddProduct = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_name: product, unit_price: price, units_in_stock: quantity }),
      });
      const data = await response.json();
      setInventory([...inventory, data]);
      setProduct('');
      setQuantity(0);
      setPrice(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProduct = async (productToDelete) => {
    console.log(productToDelete);
    try {
      await fetch(`http://localhost:5000/products/${productToDelete.product_id}`, { method: 'DELETE' });
      setInventory(inventory.filter((item) => item.product_id !== productToDelete.product_id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    console.log(quantity);
  
    try {
      const response = await fetch(`http://localhost:5000/products/${editedProduct.product_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_name: editedProduct.product_name, unit_price: price, units_in_stock: quantity }),
      });
      console.log("fetched");
      const data = await response.json();
      setInventory(
        inventory.map((item) => (item.product_id === data.product_id ? data : item))
      );
      setEditedProduct(null);
      setQuantity(0);
      setPrice(0);
    } catch (error) {
      console.error(error);
    }
  };
  
  

    return (
      <div className="inventory-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1 className="inventory-header">Inventory Management</h1>
        {!editedProduct ? (
          <form className="inventory-form" onSubmit={handleAddProduct}>
            <label>
              Product:
              <input
                type="text"
                value={product}
                onChange={(event) => setProduct(event.target.value)}
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </label>
            <button type="submit">Add Product</button>
          </form>
        ) : (
          <form className="inventory-form" onSubmit={handleUpdateProduct}>
            <h2>Edit Product</h2>
            <label>
              Product:
              <input type="text" value={editedProduct.product_name} readOnly />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </label>
            <button type="submit">Update Product</button>
          </form>

        )}
        <table className="inventory-table">
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
              <tr key={item.product_id}>
                <td>{item.product_name}</td>
                <td>{item.units_in_stock}</td>
                <td>{item.unit_price}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(item)}>
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      setEditedProduct(item) ||
                      console.log("edit product set") ||
                      setQuantity(item.units_in_stock) ||
                      console.log("quantity set") ||
                      setPrice(item.unit_price) ||
                      console.log("edit price set")
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default InventoryPage;
