/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export default function ProfileSction(props){
    return(
        <div className={styles.section}>
            {props.children}
        </div>
    )
}