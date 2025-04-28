// components/header.js
import { useRouter } from 'next/router';
import styles from './Header.module.css';

const Header = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <a href="/"><h1>ShopSmart</h1></a>
      </div>

      {isHomePage && (
        <div className={styles.search}>
          <input type="text" placeholder="Search products..." />
        </div>
      )}
    </header>
  );
};

export default Header;
