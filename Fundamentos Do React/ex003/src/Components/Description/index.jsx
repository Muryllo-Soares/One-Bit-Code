/* eslint-disable react/prop-types */
import style from './style.module.css'
export default function Description ({title, phone, mail}){
    return(
        <div className={style.Description}>
            <p >{title}</p>
            <p>{phone}</p>
            <p>{mail}</p>
            <hr />
        </div>
     
    )
}