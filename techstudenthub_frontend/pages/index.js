import { useState } from 'react';
import fetch from 'isomorphic-unfetch'; // Make sure you have installed this package
import styles from '../src/app/page.module.css'; // Adjust the path as needed

export default function SignUp() {
  // State to store the input from the user
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Here, add the API call to the backend endpoint responsible for handling waitlist sign-ups
    try {
      const response = await fetch('http://127.0.0.1:8000/api/waitlist/', { // Change the endpoint as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Only email is needed for waitlist
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Added to waitlist successfully:', data);
        // You could clear the form or display a success message
      } else {
        const errorData = await response.json();
        console.error('Failed to join waitlist:', errorData);
        // Display error messages to the user
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Display an error message to the user
    }
  };

  // The JSX for the form, using styles from your CSS module
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Join Our Waitlist</h1>
      <p className={styles.description}>Sign up to be the first to know when we launch.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Join Waitlist</button>
      </form>
    </main>
  );
}
