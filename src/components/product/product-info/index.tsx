import { FC } from 'react';
import { TypeProduct } from '../../../types/product';
import styles from './product-info.module.scss';
import { Image } from './image';
import { AddToFavorite } from '../../add-to-favorite';

interface ProductInfoProps {
  product: TypeProduct | null;
}

export const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productInfo}>
      <Image src={product.src} alt={product.name} />
      <div className={styles.info}>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles.actions}>
          <p className={styles.price}>$ {product.price}</p>
          <AddToFavorite product={product} />
        </div>
      </div>
    </div>
  );
};
