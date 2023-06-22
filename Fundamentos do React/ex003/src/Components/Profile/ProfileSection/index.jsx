/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export default function ProfileSction(props){
    return(
        <div 
        {...props}
        className={`${styles.section} ${props.className}`}
        >
          {props.children}  
        </div>
    )
}