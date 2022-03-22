import type { NextPage } from "next";
import styles from "../styles/AudioPlayer.module.css";
import playBtn from "../public/play.svg";

const Home: NextPage = () => {
  return (
    <div className={styles.audioPlayer}>
      <button className={styles.play}></button>
    </div>
  );
};

export default Home;
