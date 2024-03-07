import styles from "./Footer.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <h1>
          <strong>MovieHub2Day</strong>
          <div></div>
        </h1>
        <p>
          <strong>MovieHub2Day 2024</strong>
        </p>
      </div>
      <div className={styles.footertxt}>
        <p>
          <strong>MovieHub2Day</strong> is a <strong>Free Movies streaming, downloading</strong> site and library with
          fewer ads. We let you stream, download and/or explore{" "}
          <strong>movies, tv series and people online free</strong>, with over 1,000,000 <strong>movies</strong>,{" "}
          <strong>TV-Series</strong> and people for you to explore and stream or <strong>download</strong> and watch
          later.
        </p>
        <ul>
          <Link href={"/privacy-policy"}>
            <li>Privacy Policy</li>
          </Link>
          <Link href={"mailto:contactmoviehub@proton.me"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className={styles.disclaimer}>
        <span></span>
        <p>
          <strong>MovieHub2Day</strong> does not own any servers and therefore does not store any of the files on this
          site. All data on this site is scrapped and linked off the internet from publicly available websites.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
