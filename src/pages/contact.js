// pages/contact.js
import Head from 'next/head'
import styles from '../styles/Contactus.module.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Handle the form submission (e.g., send data to an API or service)
    console.log('Form Data:', { name, email, message });

    // Reset form
    e.target.reset();
  }

  return (
    <>
      <Head>
        <title>ShopSmart - Contact Us</title>
      </Head>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>ShopSmart</h1>
          </div>
          <nav className={styles.nav}>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/cart">Cart</a>
            <a href="/login">Login</a>
          </nav>
        </header>

        <main className={styles.main}>
          <div className={styles.formBox}>
            <h1>Contact Us</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input className={styles.input} type="text" id="name" name="name" placeholder="Your Name" required />

              <label className={styles.label} htmlFor="email">Email</label>
              <input className={styles.input} type="email" id="email" name="email" placeholder="Your Email" required />

              <label className={styles.label} htmlFor="message">Message</label>
              <textarea className={styles.textarea} id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

              <button className={styles.button} type="submit">Send Message</button>
            </form>
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
    </>
  )
}
