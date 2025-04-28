import Head from 'next/head';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShopSmart - About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>ShopSmart</h1>
        </div>

        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="contact">Contact Us</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.aboutContainer}>
          <h1>About Us</h1>
          <p>
            Welcome to ShopSmart, the online store where convenience meets quality. 
            At ShopSmart, we believe shopping should be fun, easy, and affordable...
          </p>

          <h3>Our Mission</h3>
          <p>Our mission is to make shopping an enjoyable experience for everyone...</p>

          <h3>Our Values</h3>
          <ul>
            <li><strong>Customer Satisfaction:</strong> We prioritize our customers' satisfaction...</li>
            <li><strong>Quality:</strong> We carefully curate all our products...</li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="/customer-service">Customer Service</a> |
          <a href="/terms">Terms of Use</a> |
          <a href="/privacy">Privacy Policy</a> |
          <a href="/returns">Returns & Refunds</a>
        </div>
      </footer>
    </div>
  );
};

export default About;
