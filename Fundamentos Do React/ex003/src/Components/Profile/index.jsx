/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import LinkButton from "../LinkButton"
import ProfileSection from "../ProfileSection"
import Title from "../Title"
import style from "./style.module.css"

function hundleClick (ev){
    console.log(ev)
    alert("Agora você está seguindo")
}

export default function Profile(props){
    return (
        <div className={style.container}>
            <img className={style.avatar} src={props.avatar} alt={props.name} />
            <Title className={style.name}>
                {props.name}
                <button
                className={style.followButton}
                onClick={hundleClick}
                >
                    Follow
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>
            <div className={style.links}>
                <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
                <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
            </div>
            </ProfileSection>
         
        </div>
       
    )
}