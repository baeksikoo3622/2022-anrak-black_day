import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="짜장면 데이 기념 웹사이트 - BN" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main1}>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("22.04.14...")
                .pauseFor(300)
                .typeString("<strong>BLACK</strong> DAY")
                .start()
                .callFunction(function (state) {
                  state.elements.cursor.style.display = "none";
                });
            }}
          />
          <h3>The Day for Solo</h3>
        </h1>
      </div>
      <div className={styles.main2}></div>
    </div>
  );
};

export default Home;
