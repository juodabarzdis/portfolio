import React from "react";
import styles from "./Home.module.scss";

import Hero from "../../components/molecules/Hero";
import TextSection from "../../components/atoms/TextSection";
import Article from "../../components/molecules/Article/Article";
import ScrollingText from "../../components/molecules/ScrollingText";

import Image from "../../assets/images/image-asset.jpeg";
import Image2 from "../../assets/images/image-asset-2.jpeg";
import Border from "../../assets/images/Border.jsx";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero image={Image2} border={Border} color="var(--theme-yellow)">
        <h1>Hello World! This is Lukas calling.</h1>
      </Hero>
      <div className={styles.middle}>
        <TextSection />
        <Article />
        <TextSection />
        <TextSection />
      </div>
      <Hero
        image={Image}
        border={Border}
        reverse="true"
        color="var(--theme-orange)"
      >
        <h1>Contact me!</h1>
      </Hero>
      <ScrollingText />
    </div>
  );
};

export default Home;
