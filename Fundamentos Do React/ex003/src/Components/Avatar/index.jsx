import style from "./style.module.css"
import Profile from "/src/assets/profile.jpg"

export default function Avatar (){
    return(
        <>
            <img className={style.avatar} src={Profile} alt="Avatar Profile" />
        </>
    )
}