import about from "./about.json"
import styles from "./style.module.css"
import {ServiceBlock} from "./ServiceBlock"
export const OurServices = ()=>{
    return(
        <div className={styles.line}>
        <div className={styles.container}>
{about.map((el) =><ServiceBlock key ={el.id} title={el.title} image={el.image} description={el.description}/>)}
        </div>
        </div>
    )
} 