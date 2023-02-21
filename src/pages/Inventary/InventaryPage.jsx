import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import { API } from '../../shared/services/api';

const InventaryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products').then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div>
      {products &&
        products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      {console.log(products)}
    </div>
  );
};

export default InventaryPage;
