import React from "react";
import styles from "./Home.module.scss";

import Hero from "../../components/molecules/hero/Hero";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

export default Home;
