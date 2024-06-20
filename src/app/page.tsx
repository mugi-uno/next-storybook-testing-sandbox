import { Suspense } from "react";
import styles from "./page.module.css";
import { AsyncComponent } from "./AsyncComponent";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback="loading...">
        <AsyncComponent />
      </Suspense>
    </main>
  );
}
