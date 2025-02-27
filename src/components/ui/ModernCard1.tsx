"use client"; 

import styles from "@/components/customCSS/ModernCard1.module.css";

export function ModernCard1() {
  return (
    <main className="">
      <div className={styles.outer}>
        <div className={styles.dot}></div>
        <div className={styles.card}>
          <div className={styles.ray}></div>
          <div className={styles.text}>750k</div>
          <div>Views</div>
          <div className={`${styles.line} ${styles.topl}`}></div>
          <div className={`${styles.line} ${styles.leftl}`}></div>
          <div className={`${styles.line} ${styles.bottoml}`}></div>
          <div className={`${styles.line} ${styles.rightl}`}></div>
        </div>
      </div>
    </main>
  );
}

export default ModernCard1;