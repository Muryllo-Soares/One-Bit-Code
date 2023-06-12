/* eslint-disable react/prop-types */
import style from "./Profile.module.css";

export default function Profile({ avatar, title, name, bio, phone, email, GitHub, Linkedin, twitter }) {
  return (
      <div className={style.card}>

        <br />

        <img  src={avatar} alt={title} />

        <div className={style.profile}>
          <h2>{name}</h2>
          <p>{bio}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>

        <br />

        <div className={style.link}>
        <a href="https://github.com/Muryllo-Soares">{GitHub}</a>
        <a href="https://www.linkedin.com/in/muryllo-soares-76a981118/">{Linkedin}</a>
        <a href="https://twitter.com/Muzer41">{twitter}</a>
        </div>
      </div>
  );
}
