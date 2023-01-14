import Marquee from "react-fast-marquee";
import styles from "./ScrollingText.module.scss";

const ScrollingText = () => {
  return (
    <Marquee
      className={styles.container}
      gradientColor={[232, 225, 253]}
      gradient="none"
      speed={180}
    >
      <p className={styles.text}>Well hello there Gintare.</p>
    </Marquee>
  );
};

export default ScrollingText;
