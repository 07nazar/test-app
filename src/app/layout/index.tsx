import { Outlet, useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Favorites } from '../../components/favorite/favorites';
import classNames from 'classnames';
import styles from './layout.module.scss';

export const Layout = () => {
  const params = useParams();
  const title = params.id ? 'Product page' : 'Product list Page';

  return (
    <>
      <Header title={title} />

      <main className={classNames('container', styles.main)}>
        <Favorites />
        <Outlet />
      </main>
    </>
  );
};
