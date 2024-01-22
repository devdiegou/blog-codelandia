import styles from "./header.module.scss";

import { Input } from "../Input/input";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          <span className={styles.code}>Code</span>
          lândia
        </h1>

        <Input placeholder="Pesquisar no blog"/>
      </header>
    </>
  );
};
