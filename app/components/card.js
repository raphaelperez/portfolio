import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card(props) {
  return (
    <Link className={styles["card"]} href={props.link}>
      <Image
        className={styles["card-image"]}
        src={props.img}
        fill
        sizes={400}
        priority
        alt="Imagem do projeto"
      />
      <div className={styles["card-titulo"]}>
        <h2>{props.projeto}</h2>
      </div>
    </Link>
  );
}
