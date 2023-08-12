import { useEffect, useState } from 'react';
import { TypeProduct } from '../../types/product';
import { ProductList } from '../../components/product/product-list';
import { fetchProducts } from '../../api/product-api';

export const ProductListPage = () => {
  const [products, setProducts] = useState<TypeProduct[]>([]);

  useEffect(() => {
    fetchProducts().then(res => setProducts(res));
  }, []);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return <ProductList products={products} />;
};
