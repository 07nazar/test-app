import styles from './favorites.module.scss';
import { FavoriteCard } from '../favorite-card';
import { useGlobalState } from '../../../state';

export const Favorites = () => {
  const [favoritesProducts] = useGlobalState('favoriteProducts');

  return (
    <div className={styles.favorites}>
      <h2 className={styles.title}>Favorites</h2>

      <div className={styles.scrollContainer}>
        <div className={styles.productList}>
          {favoritesProducts.map(product => {
            return <FavoriteCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};
