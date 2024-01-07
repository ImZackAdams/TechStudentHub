// Import the useState hook from React to manage form state
import { useState } from 'react';
import styles from '../src/app/page.module.css'; // Your styles

export default function SignUp() {
  // State to store the input from the user
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submit action
    // Log the email to the console for now
    console.log('Submitted email:', email);

    // Placeholder for where you'll make the API request
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
        <button type="submit" className={styles.button}>Join Waitlist</button>
      </form>
    </main>
  );
}
