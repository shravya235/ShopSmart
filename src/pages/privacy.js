import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/footer';
import styles from '../styles/Privacy.module.css'; // Importing CSS module for styling

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>ShopSmart - Privacy Policy</title>
        <meta name="description" content="Privacy Policy of ShopSmart, ensuring your privacy and data security." />
      </Head>


      <div className={styles.privacyContent}>
        <h1>Privacy Policy</h1>
        <p>
          At ShopSmart, we value your privacy and are committed to protecting your personal information. This Privacy
          Policy explains what data we collect, how we use it, and the steps we take to safeguard your personal information.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect personal information when you use our website, such as your name, email address, phone number,
          payment information, and any other details necessary for processing orders and providing services. We also
          collect non-personally identifiable information such as your IP address, browser type, and device information
          for analytical purposes.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use your personal information to provide you with a better shopping experience, including processing your
          orders, delivering products, offering customer support, and sending promotional offers (if you’ve opted in).
          Additionally, we may use your information to analyze trends, improve our website, and ensure security.
        </p>

        <h2>3. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. However, we may share your information with
          trusted service providers who help us with website operation, payment processing, and product delivery. These
          partners are bound by confidentiality agreements and are only allowed to use your information for specific tasks.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement strong security measures to protect your personal data from unauthorized access, disclosure,
          alteration, or destruction. These include encryption, firewalls, and secure servers.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete the personal information we hold about you. If you wish to
          exercise these rights, please contact us using the information provided below.
        </p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this
          page, and the revised policy will become effective immediately upon posting.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy or the information we hold about you, please
          contact us at: <a href="mailto:support@shopsmart.com">support@shopsmart.com</a>.
        </p>
        </div>
    </div>
  );
}
