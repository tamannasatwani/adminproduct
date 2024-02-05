import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './AdminPage';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage addProduct={addProduct} />} />
        <Route path="/products" element={<ProductsList products={products} />} />
        <Route path="/products/:id" element={<ProductDetail products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;

