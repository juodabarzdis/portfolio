import Marquee from "react-fast-marquee";
import styles from "./ScrollingText.module.scss";

const ScrollingText = () => {
  return (
    <Marquee
      className={styles.container}
      gradientColor={[232, 225, 253]}
      gradient="none"
      speed={60}
    >
      <p className={styles.text}>
        I can be a React component, multiple React components, or just some
        text.
      </p>
    </Marquee>
  );
};

export default ScrollingText;
