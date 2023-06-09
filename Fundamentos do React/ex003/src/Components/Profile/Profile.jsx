/* eslint-disable react/prop-types */
import style from "./Profile.module.css";

export default function Profile({ avatar, title, name }) {
  return (
      <div className={style.card}>
        <img  src={avatar} alt={title} />
        <p>{name}</p>
        <hr />
        <p>Full-STACK</p>
      </div>
  );
}
