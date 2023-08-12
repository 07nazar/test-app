import { ProductInfo } from '../../components/product/product-info';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TypeProduct } from '../../types/product';
import { fetchProductById } from '../../api/product-api';

export const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState<TypeProduct | null>(null);

  const navigate = useNavigate();

  if (!id) {
    navigate(-1);
  }

  useEffect(() => {
    fetchProductById(id!).then(res => setProductData(res));
  }, [id]);

  return <ProductInfo product={productData} />;
};
