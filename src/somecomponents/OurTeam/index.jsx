import empoyees from "./employees.json";
import { OurTeamCard } from "./OurTeamCard";
import styles from "./style.module.css";

export const OurTeam = () => {
  return (
    <div className={styles.employeeLine}>
    <div className={styles.employeeList}>
      {empoyees.map((el) => (
        <OurTeamCard
          key={el.id}
          imagePath={el.imagePath}
          name={el.name}
          position={el.position}
        />
      ))}
    </div>
    </div>
  );
};
