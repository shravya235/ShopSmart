import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/signup.module.css'; // Import the CSS module

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Handle form submission logic here
    // Example: Call an API to create an account
    alert('Account created successfully');
  };

  return (
    <div>
      <Head>
        <title>ShopSmart - Sign Up</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.signupForm}>
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <br />

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.submitButton}>Sign Up</button>
          </form>

          <p>
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Signup;
