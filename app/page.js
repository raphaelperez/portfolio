import styles from "./page.module.css";

import Card from "./components/card";

export default function Home() {
  return (
    <div className={styles["cards"]}>
      <Card projeto="Apartamento 2001" img="/2001/V03.jpg" link="/apto2001" />
    </div>
  );
}
