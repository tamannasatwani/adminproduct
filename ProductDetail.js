import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Television Product Detail</h2>
      <img src={product.image} alt={product.name} />
      <p>Name: {product.name}</p>
    </div>
  );
};

export default ProductDetail;





