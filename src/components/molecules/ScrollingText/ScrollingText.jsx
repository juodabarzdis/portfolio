import Marquee from "react-fast-marquee";
import styles from "./ScrollingText.module.scss";

const ScrollingText = (props) => {
  const { children, color, gradient = [232, 225, 253] } = props;

  return (
    <Marquee
      className={styles.container}
      style={{ backgroundColor: color }}
      gradientColor={gradient}
      speed={180}
    >
      <p className={styles.text}>{children}</p>
    </Marquee>
  );
};

export default ScrollingText;
