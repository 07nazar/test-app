import { useGlobalState } from '../../state';
import { FC, useEffect } from 'react';
import { TypeProduct } from '../../types/product';
import { setLSItem } from '../../helpers/local-storage-helpers';
import add from './not-added.svg';
import remove from './added.svg';
import { extractUrl } from '../../helpers/extract-url';
interface AddToFavoriteProps {
  product: TypeProduct;
}

export const AddToFavorite: FC<AddToFavoriteProps> = ({ product }) => {
  const [favoriteProducts, setFavoriteProducts] =
    useGlobalState('favoriteProducts');

  const isAdded = favoriteProducts.some(
    (item: TypeProduct) => item.id === product.id
  );

  const removeFromFavorite = () => {
    setFavoriteProducts(prev =>
      prev.filter(favoriteProduct => favoriteProduct.id !== product.id)
    );
  };

  const addToFavorite = () => {
    const url = extractUrl(import.meta.env.VITE_API_URL);
    setFavoriteProducts(prev => [
      ...prev,
      { ...product, src: url + product.src },
    ]);
  };

  const buttonHandler = () => {
    if (isAdded) {
      removeFromFavorite();
    } else {
      addToFavorite();
    }
  };

  useEffect(() => {
    setLSItem('favoriteProducts', favoriteProducts);
  }, [favoriteProducts]);

  return (
    <button onClick={buttonHandler}>
      <img src={isAdded ? remove : add} alt={'isAdded'} />
    </button>
  );
};
