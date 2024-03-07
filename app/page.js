"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

export default function Landing() {
  return (
    <div className={styles.main}>
      <Link href={"/home"}>
        <h1>
          MovieHub2Day <div></div>
        </h1>
      </Link>
      <h2 className={styles.h2}>
        <strong>Watch Movies Online in HD for Free!</strong>
      </h2>
      <Link className={styles.form} href={"/search"}>
        <form action="">
          <input type="text" placeholder="search for a movie, tv show, person..." />
          <button type="submit">search</button>
        </form>
      </Link>
      <p>Please share MovieHub2Day with your friends and family.</p>
      <div className={styles.share}>
        <FacebookShareButton
          url={`https://moviehub2day.vercel.app/home`}
          title={"MovieHub2Day is a free online movie streaming and downloading platform"}
        >
          <FacebookIcon />
        </FacebookShareButton>
        <TwitterShareButton
          url={`https://moviehub2day.vercel.app/home`}
          title={"MovieHub2Day is a free online movie streaming and downloading platform"}
        >
          <TwitterIcon />
        </TwitterShareButton>
        <FacebookMessengerShareButton
          url={`https://moviehub2day.vercel.app/home`}
          title={"MovieHub2Day is a free online movie streaming and downloading platform."}
        >
          <FacebookMessengerIcon />
        </FacebookMessengerShareButton>
        <RedditShareButton
          url={`https://moviehub2day.vercel.app/home`}
          title={"MovieHub2Day is a free online movie streaming and downloading platform"}
        >
          <RedditIcon />
        </RedditShareButton>
        <WhatsappShareButton
          url={`https://moviehub2day.vercel.app/home`}
          title={"MovieHub2Day is a free online movie streaming and downloading platform"}
        >
          <WhatsappIcon />
        </WhatsappShareButton>
        <TelegramShareButton
          url={`https://moviehub2day.vercel.app/home`}
          title={"MovieHub2Day is a free online movie streaming and downloading platform"}
        >
          <TelegramIcon />
        </TelegramShareButton>
      </div>
      <Link href={`/home`}>
        <button className={styles.sitebtn}>
          View Full Site <BsFillArrowRightCircleFill />
        </button>
      </Link>
      <div className={styles.info}>
        <p>Watch movies and series online for free</p>
        <p>No account registration required</p>
        <p>downloads available via torrent</p>
        <p>very few ads</p>
      </div>
      <Link href={`/home`}>
        <button className={styles.sitebtn}>
          Go To MovieHub2Day <BsFillArrowRightCircleFill />
        </button>
      </Link>
    </div>
  );
}
