// pages/payment.js

import Head from "next/head";
import styles from "../styles/Payment.module.css";
import Link from "next/link";

export default function Payment() {
  return (
    <>
      <Head>
        <title>ShopSmart - Payment</title>
      </Head>

      <div className={styles.bodyWrapper}>
        <header className={styles.header}>
          <div className={styles.logo}>ShopSmart</div>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            <Link href="/cart" className={styles.navLink}>Cart</Link>
            <Link href="/login" className={styles.navLink}>Login</Link>
          </nav>
        </header>

        <div className={styles.backButtonContainer}>
          <button className={styles.backButton} onClick={() => window.location.href = "/cart"}>
            Back to Cart
          </button>
        </div>

        <main className={styles.mainContent}>
          <section className={styles.formContainer}>
            <form className={styles.form}>
              <h1>Payment</h1>

              <label htmlFor="card-number"><strong>Card Number:</strong></label>
              <input type="text" id="card-number" className={styles.inputField} placeholder="Enter your card number" required />

              <label htmlFor="expiry-date"><strong>Expiry Date:</strong></label>
              <input type="text" id="expiry-date" className={styles.inputField} placeholder="MM/YY" required />

              <label htmlFor="cvv"><strong>CVV:</strong></label>
              <input type="text" id="cvv" className={styles.inputField} placeholder="Enter CVV" required />

              <button type="submit" className={styles.submitButton}>Complete Payment</button>
            </form>

            <div className={styles.qrCodeSection}>
              <p><strong>Or Scan the QR code for the Payment</strong></p>
              <div className={styles.qrBox}>
                <img src="/images/qr-code.jpg" alt="QR Code" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
