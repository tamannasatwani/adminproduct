import React from 'react';
import { Link } from 'react-router-dom';

const ProductsList = ({ products }) => {
  return (
    <div>
      <h2>Television Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;

