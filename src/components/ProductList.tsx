import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi';
import { Product } from '../models/Product';
import { BasketItem } from '../models/BasketItem';

interface ProductListProps {
  addToBasket: (item: BasketItem) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToBasket }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleAdd = (product: Product) => {
    const quantity = parseInt(prompt("Enter quantity:", "1") || "1", 10);
    addToBasket({ product, quantity });
  };

  return (
    <div className='container'>
      <h2>Products</h2>
      {products.map(p => (
        <div className='card' key={p.id}>
          <strong>{p.name}</strong> - {p.description} - £{p.price}
          <button className="btn-space" onClick={() => handleAdd(p)}>Add to Basket</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;