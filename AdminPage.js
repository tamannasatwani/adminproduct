import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = () => {
    addProduct({ id: Date.now(), name: productName, image: productImage });
    setProductName('');
    setProductImage('');
    navigate('/products');
  };

  return (
    <div>
      <h2>Add Television Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={productImage}
        onChange={(e) => setProductImage(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AdminPage;
