import React from "react";
import styles from "./Home.module.scss";

import Hero from "../../components/molecules/hero/Hero";
import TextSection from "../../components/atoms/TextSection";
import Article from "../../components/molecules/article/Article";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <div className={styles.middle}>
        <TextSection />
        <Article />
        <TextSection />
        <TextSection />
      </div>
    </div>
  );
};

export default Home;
