import { createGlobalState } from 'react-hooks-global-state';
import { TypeProduct } from '../types/product';
import { getLSItem } from '../helpers/local-storage-helpers';

type TypeInitialState = {
  favoriteProducts: TypeProduct[];
};

const initialState: TypeInitialState = {
  favoriteProducts: getLSItem('favoriteProducts') || [],
};

const { getGlobalState, setGlobalState, useGlobalState } =
  createGlobalState(initialState);

export { setGlobalState, getGlobalState, useGlobalState };
