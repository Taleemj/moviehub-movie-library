"use client";
import { useState, useEffect } from "react";
import styles from "./Downloads.module.scss";
import Subnav from "@/components/subnav/Subnav";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { BiDownload } from "react-icons/bi";

const Page = ({ params: { slug } }) => {
  const [details, setdetails] = useState([]);
  const [thedownloads, setthedownloads] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${slug}?api_key=${process.env.NEXT_PUBLIC_THEMOVIEDB_API_KEY}`
    );
    setdetails(data);
    s;
    const req = await axios.post("/api/getMovies", {
      title: data?.name + " " + new Date(data?.first_air_date).getFullYear(),
    });
    setthedownloads(req.data.results);
    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return loading ? (
    <div className="loading">
      <Image
        src={"/loaderspinner.svg"}
        alt="loading"
        width={100}
        height={100}
      />
    </div>
  ) : (
    <div className={styles.container}>
      <Subnav mediatype={"tvshows"} id={slug} />
      <Link href={`/tvshows/${slug}`} className={styles.moviedetails}>
        <Image
          src={
            details.poster_path
              ? `https://www.themoviedb.org/t/p/original${details.poster_path}`
              : "/placeholderImage.png"
          }
          width={1000}
          height={1000}
          alt="image"
        />
        <div className={styles.subnav}>
          <h1>
            {details.name} ({new Date(details.first_air_date).getFullYear()})
          </h1>
          <p>&larr; Back to main.</p>
        </div>
      </Link>
      {thedownloads.length ? (
        <div className={styles.othercontainer}>
          <div className={styles.howto}>
            <h2>How to Download</h2>
            <p>
              All you need is a download manager: Example{" "}
              <a
                href="https://www.freedownloadmanager.org/download.htm"
                target="_blank"
                rel="noreferrer"
              >
                free download manager
              </a>
            </p>
          </div>
          <div className={styles.linksList}>
            {thedownloads.map((d, i) => (
              <Link href={d.link} key={i}>
                <p className={styles.thename}>
                  {d.thename.substring(7).trim()}
                </p>
                <p className={styles.thelink}>{d.size}</p>
                <p className={styles.theicon}>
                  <BiDownload />
                </p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h1>No downloads available for {details.name} :(</h1>
        </div>
      )}
    </div>
  );
};

export default Page;
