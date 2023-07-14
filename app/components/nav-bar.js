import Link from "next/link";
import styles from "./nav-bar.module.css";

export default function NavBar() {
  return (
    <div className={styles["nav-bar"]}>
      <Link href={"/"} className={styles["logo"]}>
        raphael perez
      </Link>
    </div>
  );
}
