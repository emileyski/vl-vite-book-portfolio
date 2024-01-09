import styles from "./Button.module.css";

function Button({ children, onClick, secondary = false, small = false }) {
  return (
    <button
      onClick={onClick}
      className={
        styles["btn"] +
        (secondary ? " " + styles["secondary"] : "") +
        (small ? " " + styles["small"] : "")
      }
    >
      {children}
    </button>
  );
}

export default Button;
