import React from "react";

//@ts-ignore
import styles from "./RotationErrorMessage.module.css";

export default function RotationErrorMessage() {
  return (
    <div className={styles["error-wrapper"]}>
      <h1>
        Please rotate your device to portrait mode to view this website.{" "}
        <i className="bx bx-rotate-right"></i>
      </h1>
    </div>
  );
}
