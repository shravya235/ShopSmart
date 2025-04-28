// components/Header.js
import { useRouter } from 'next/router';
import styles from './Header.module.css';

const Header = ({ onSearch }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/"><h1>ShopSmart</h1></a>
      </div>

      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/login">Login</a>
      </nav>

      {isHomePage && (
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
