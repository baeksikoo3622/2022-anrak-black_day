import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import AudioPlayer from "../components/AudioPlayer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Audio</title>
        <meta name="description" content="오디오 테스트" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AudioPlayer />
    </div>
  );
};

export default Home;
