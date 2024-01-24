import clients from "./clients.json";
import styles from "./style.module.css";
export const OurClients = () => {
  return (
    <div className={styles.line}>
      <div className={styles.clientList}>
        {clients.map((el) => (
          <img src={el.image} alt={el.title} />
        ))}
      </div>
    </div>
  );
};
