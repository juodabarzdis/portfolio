import React from "react";
import styles from "./Home.module.scss";

import Hero from "../../components/molecules/hero/Hero";
import TextSection from "../../components/atoms/TextSection";
import Article from "../../components/molecules/Article";
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
        <TextSection title="About me">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          tempore, possimus ipsa dolores autem voluptatibus quas voluptatem qui
          illo in.
        </TextSection>
        <Article />
        <TextSection title="My phylosophy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic
          sunt est dolorem cum repellat voluptatum? Non autem excepturi id est
          quo, ipsa fuga quibusdam sed blanditiis adipisci sint doloremque, sit
          hic aspernatur dolores provident. Consequuntur quo ullam reprehenderit
          tempore.
        </TextSection>
      </div>
      <Hero
        image={Image}
        border={Border}
        reverse="true"
        color="var(--theme-orange)"
      >
        <h1>Contact me!</h1>
      </Hero>
      <ScrollingText color="var(--theme-purple)">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic
      </ScrollingText>
    </div>
  );
};

export default Home;
