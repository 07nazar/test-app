import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import { ProductCard } from '../product-card';
import { FC } from 'react';
import { TypeProduct } from '../../../types/product';
import AutoSizer from 'react-virtualized-auto-sizer';
import styles from './product-list.module.scss';
interface ProductListProps {
  products: TypeProduct[];
}

const Cell = ({
  columnIndex,
  rowIndex,
  style,
  data,
}: GridChildComponentProps) => {
  const product = data[rowIndex * 4 + columnIndex];

  const styles = {
    ...style,
    left:
      columnIndex === 0 ? style.left : Number(style.left) + columnIndex * 20,
    right: columnIndex === 4 ? style.right : columnIndex * 20,
    top: rowIndex === 0 ? style.top : Number(style.top) + rowIndex * 70,
  };
  return (
    <div style={styles}>{product && <ProductCard product={product} />}</div>
  );
};

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <Grid
              className={styles.scroll}
              columnCount={4}
              columnWidth={260}
              height={height}
              rowCount={Math.ceil(products.length / 4)}
              rowHeight={360}
              width={width}
              itemData={products}>
              {Cell}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
};
