import { useState } from 'react';
import styles from '../styles/Login.module.css';
import Footer from '@/components/footer';
import Header from '@/components/header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <section className={styles.loginForm}>
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Log In</button>
          </form>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;
