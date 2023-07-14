import styles from "./toggle-image.module.css";

export default function ToggleImage(props) {
  return (
    <div className={styles["toggle-image"]}>
      <button
        className={styles["toggle-image-btn"]}
        onClick={props.voltarImagePosHandler}
      >
        <img src="/icons/voltar.svg" alt="seta" />
      </button>
      <button
        className={styles["toggle-image-btn"]}
        onClick={props.avancarImagePosHandler}
      >
        <img src="/icons/avancar.svg" alt="seta" />
      </button>
    </div>
  );
}
