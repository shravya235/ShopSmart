// pages/terms.js
import Head from 'next/head';
import styles from '../styles/Terms.module.css';  // Import the CSS file for styling

const Terms = () => {
  return (
    <div>
      <Head>
        <title>Terms and Conditions - ShopSmart</title>
      </Head>
      
      <div className={styles.termsContainer}>
        <h1>Terms and Conditions</h1>
        <p>Last updated: April 21, 2025</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to ShopSmart! By using our website, you agree to the following terms and conditions...</p>
        </section>

        <section>
          <h2>2. Use of Services</h2>
          <p>ShopSmart provides an online marketplace for shopping. You are responsible for ensuring that all information provided...</p>
        </section>

        <section>
          <h2>3. Privacy and Data Protection</h2>
          <p>Your privacy is important to us. Please refer to our Privacy Policy for more information...</p>
        </section>

        <section>
          <h2>4. Account Responsibility</h2>
          <p>By creating an account, you agree to keep your account information confidential. You are responsible for any activity that occurs under your account...</p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>ShopSmart is not liable for any damages, loss of data, or any other consequence arising from the use of the website...</p>
        </section>

        <section>
          <h2>6. Changes to Terms</h2>
          <p>We may update these terms from time to time. Any changes will be posted on this page...</p>
        </section>

        <section>
          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of the country where ShopSmart operates...</p>
        </section>

        <section>
          <h2>8. Contact Information</h2>
          <p>If you have any questions about these terms, feel free to contact us at <a href="mailto:support@shopsmart.com">support@shopsmart.com</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
