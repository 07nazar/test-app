import { FC } from 'react';

interface HeaderProps {
  title: string;
}

import styles from './header.module.scss';

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};
