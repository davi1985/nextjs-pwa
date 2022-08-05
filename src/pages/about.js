import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About Page</h1>

      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
