import Head from 'next/head';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShopSmart - About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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

    </div>
  );
};

export default About;
