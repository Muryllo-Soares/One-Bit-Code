import Avatar from "../Avatar";
import Button from "../Button";
import Description from "../Description";
import style from "./style.module.css"

export default function Card(){
    return (
        <div className={style.container}>
            <Avatar className={style.avatar}/>
            <h2>Muryllo Soares</h2>
            <Description title= "Full-stack javascript developer"/>
            <Description phone= "+556699999-9999"/>
            <Description mail = "Muryllo@email.com"/>
            <Button gitHubBtn = "GitHub"/>
            <Button linkeDinBtn = "LinkedIn"/>
            <Button twitterBtn = "Twitter"/>
        </div>
       
    )
}