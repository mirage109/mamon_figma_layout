import styles from "./style.module.css";

export const ServiceBlock=(props)=>{
    return(
        <div className={styles.serviceBlock}>
            <img className={styles.image} src={props.image} alt={props.title} />
            <div className={styles.positionConainer}>
            <h3 className={styles.h3}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )
}