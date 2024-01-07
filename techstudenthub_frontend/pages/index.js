import { useState } from 'react';
import fetch from 'isomorphic-unfetch'; // Make sure you have installed this package
import styles from '../src/app/page.module.css'; // Your styles

export default function SignUp() {
  // State to store the input from the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Add a state for password

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submit action

    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email, // Assuming the username is the email for simplicity
          email: email,
          password: password, // Use the password state here
        }),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log('User registered successfully:', data);
        // Handle success, e.g., redirect to the login page or display a success message
      } else {
        // Handle errors, e.g., display an error message from the response
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        // Display an error message to the user here
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      // Display an error message to the user here
    }
  };

  // The form JSX
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Join Our Waitlist</h1>
      <p className={styles.description}>Sign up now to get early access.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Join Waitlist</button>
      </form>
    </main>
  );
}
