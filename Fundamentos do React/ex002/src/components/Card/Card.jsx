/* eslint-disable react/prop-types */
import Styles from "./Card.module.css";
import Button from "../Button/Button";

export function Card({ title, posterImg, text }) {
  return (
    <div className={Styles.app}>
      <img src={posterImg} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button text="Comprar agora" />
      </div>
    </div>
  );
}
