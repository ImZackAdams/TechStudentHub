import { useState } from 'react';
import fetch from 'isomorphic-unfetch'; // Make sure you have installed this package
import styles from '../src/app/page.module.css'; // Make sure the path is correct

export default function SignUp() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/waitlist/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Added to waitlist successfully:', data);
        // Implement the success logic here
      } else {
        const errorData = await response.json();
        console.error('Failed to join waitlist:', errorData);
        // Implement the error handling logic here
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Implement error handling logic here
    }
  };

 return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="/tech-student-hub-logo.svg"
          alt="Tech Student Hub Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>Join the Tech Student Hub Waitlist</h1>
        <p className={styles.subtitle}>
          Connect with peers, discover resources, and take your university career to the next level.
        </p>
      </header>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Join Waitlist
        </button>
      </form>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Tech Student Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

