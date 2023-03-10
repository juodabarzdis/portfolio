import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ children }) => {
  return (
    <Link to="/about" className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;
