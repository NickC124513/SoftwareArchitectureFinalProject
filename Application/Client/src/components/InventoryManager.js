import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/InventoryManager.css';

const InventoryPage = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const [editedProduct, setEditedProduct] = useState(null);

  const navigate = useNavigate();

  // create a dummy inventory
  const [inventory, setInventory] = useState([
    { product: 'Apples', quantity: 10, price: 0.5 },
    { product: 'Oranges', quantity: 20, price: 0.4 },
    { product: 'Bananas', quantity: 15, price: 0.3 },
  ]);

  const handleAddProduct = (event) => {
    event.preventDefault();
    // add the new product to your inventory data
    setInventory([...inventory, { product, quantity, price }]);
    // reset the form fields
    setProduct('');
    setQuantity(0);
    setPrice(0);
  };

    const handleDeleteProduct = (productToDelete) => {
      setInventory(inventory.filter((item) => item.product !== productToDelete));
    };
  
    const handleUpdateProduct = (event) => {
      event.preventDefault();
      setInventory(
        inventory.map((item) =>
          item.product === editedProduct.product
            ? { ...item, quantity, price }
            : item
        )
      );
      // reset the form fields and close the edit form
      setEditedProduct(null);
      setQuantity(0);
      setPrice(0);
    };

    return (
      <div className="inventory-page">
        {/* add a back button to the top left corner */}
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1 className="inventory-header">Inventory Management</h1>
        {/* conditionally render the add product form or the edit product form */}
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
              <input type="text" value={editedProduct.product} readOnly />
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
            {/* map over your inventory data and display it here */}
            {inventory.map((item) => (
              <tr key={item.product}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                {/* add delete and edit buttons to each row */}
                <td>
                  <button onClick={() => handleDeleteProduct(item.product)}>
                    Delete
                  </button>
                  {/* add an edit button to each row */}
                  <button
                    onClick={() =>
                      setEditedProduct(item) ||
                      setQuantity(item.quantity) ||
                      setPrice(item.price)
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
