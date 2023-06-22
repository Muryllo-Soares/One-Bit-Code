/* eslint-disable react/prop-types */
import style from "./Profile.module.css";
import Title from "../Title/Title.jsx";
import ProfileSection  from "./ProfileSection"

export default function Profile({
  avatar,
  title,
  name,
  bio,
  phone,
  email,
  GitHub,
  Linkedin,
  twitter,
}) {
  return (
    <div className={style.card}>
      <br />

      <img src={avatar} alt={title} />

      <div className={style.profile}>
        <Title>
        <span>{name}</span>
        <button>Follow</button>
        </Title>
        <ProfileSection>{bio}</ProfileSection>
        <ProfileSection>{phone}</ProfileSection>
        <ProfileSection>{email}</ProfileSection>
      </div>

      <br />

      <ProfileSection
      className={style.link}
      id = "link-section"
      data-test="some value"
      aria-label="social link"
      >
        <a href="https://github.com/Muryllo-Soares">{GitHub}</a>
        <a href="https://www.linkedin.com/in/muryllo-soares-76a981118/">
          {Linkedin}
        </a>
        <a href="https://twitter.com/Muzer41">{twitter}</a>
      
      </ProfileSection>
    </div>
  );
}
