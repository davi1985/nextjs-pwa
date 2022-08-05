import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact Page</h1>

      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
