import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDevice } from "../hooks/useDevice";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { device } = useDevice();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Example APP Next.js using PWA</h1>

        <div>
          <Link href={"/about"}>
            <a>About</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Input type text"
          />

          <input
            className={styles.input}
            type={device === "mobile" && "number"}
            placeholder="12.99"
          />

          <input
            className={styles.input}
            type={device === "mobile" ? "date" : "text"}
            placeholder="12.99"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
