import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to TechStudentHub</h1>
      <p className={styles.description}>
        A community-driven space for tech students to share resources, discuss topics, and support each other.
      </p>

      {/* Feature or Benefit Cards */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Discover Resources</h2>
          <p>Access a wide variety of learning materials curated by the community.</p>
        </div>

        <div className={styles.card}>
          <h2>Join Discussions</h2>
          <p>Participate in discussions and get answers to your tech questions.</p>
        </div>

        <div className={styles.card}>
          <h2>Connect with Peers</h2>
          <p>Connect with like-minded individuals and expand your network.</p>
        </div>

        <div className={styles.card}>
          <h2>Contribute</h2>
          <p>Share your knowledge and experience by contributing to the forum.</p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className={styles.center}>
        <button className={styles.ctaButton}>Join Now</button>
      </div>
    </main>
  )
}
