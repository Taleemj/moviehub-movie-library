import styles from "./Footer.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <div className={styles.logo}>
          <h1>
            <strong>MovieHub</strong>
            <div></div>
          </h1>
        </div>
        <p className={styles.footertxt}>
          Made with by <AiOutlineHeart />{" "}
          <Link href="https://taleemmankuer.vercel.app" target="_blank">
            Taleem
          </Link>
        </p>
        <p className={styles.footertxt}>
          Powered by{" "}
          <Link href="https://developer.themoviedb.org/reference/intro/getting-started" target="_blanks">
            TMDB's API
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
