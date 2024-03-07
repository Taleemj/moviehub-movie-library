"use client";
import { useState, useEffect } from "react";
import styles from "../Iframe/Iframe.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Image from "next/image";

const WatchIframe = ({ theurl, handleclose }) => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 2000);
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className="loading">
          <Image src={"/loaderspinner.svg"} alt="loading" width={100} height={100} />
        </div>
      ) : (
        <>
          <iframe src={theurl} width="500" frameBorder={0} height="300" title="trailer player" allowFullScreen />
          <div className={styles.svg} onClick={handleclose}>
            <AiOutlineClose />
          </div>
        </>
      )}
    </div>
  );
};

export default WatchIframe;
