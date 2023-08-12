import { FC } from 'react';
import { TypeProduct } from '../../../types/product';
import styles from './product-card.module.scss';
import { Link } from 'react-router-dom';
import { truncateString } from '../../../helpers/truncate-string';
import { AddToFavorite } from '../../add-to-favorite';

interface ProductCardProps {
  product: TypeProduct;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, src, price, id } = product;

  return (
    <div className={styles.card}>
      <Link to={`/${id}`} className={styles.link}>
        <img
          src={`https://testbackend.nc-one.com${src}`}
          alt={String(id)}
          className={styles.image}
        />
      </Link>
      <h3 className={styles.title}>{truncateString(name, 30)}</h3>
      <div className={styles.actions}>
        <p className={styles.price}>$ {price}</p>
        <AddToFavorite product={product} />
      </div>
    </div>
  );
};
