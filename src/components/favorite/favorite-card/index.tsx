import { FC } from 'react';
import { TypeProduct } from '../../../types/product';

import styles from './favorite-card.module.scss';
import { AddToFavorite } from '../../add-to-favorite';

interface FavoriteCardProps {
  product: TypeProduct;
}
export const FavoriteCard: FC<FavoriteCardProps> = ({ product }) => {
  return (
    <div className={styles.favoriteCard}>
      <img
        src={product.src}
        alt={product.name}
        className={styles.favoriteImage}
      />
      <div className={styles.info}>
        <h5 className={styles.name}>{product.name}</h5>
        <div className={styles.actions}>
          <p className={styles.price}>$ {product.price}</p>
          <AddToFavorite product={product} />
        </div>
      </div>
    </div>
  );
};
