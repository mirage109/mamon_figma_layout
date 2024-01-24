import styles from "./introduction.module.css";
export const Introduction = () => {
  return (
    <div className={styles.introdutionContainer}>
      <h2 className={styles.introdutionTitle}>We're an independent development agency.</h2>
      <p className={styles.introdutionParagraf}>
        We understand the intricacies of web development inside-out. That's why
        we build rock-solid Mobile and Web applications enriched with
        user-centered visual experiences.
      </p>
      <button className={styles.introdutionButton}>Contact Us</button>
    </div>
  );
};
