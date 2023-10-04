/* eslint-disable react/prop-types */
import style from "./style.module.css"
export default function Button({gitHubBtn,linkeDinBtn, twitterBtn}){
    return(
        <div className={style.button}>
            <a href="GitHub">{gitHubBtn}</a>
            <a href="LinkedIn">{linkeDinBtn}</a>
            <a href="Twitter">{twitterBtn}</a>
        </div>
  
        
     
    )
}