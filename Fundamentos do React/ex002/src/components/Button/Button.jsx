/* eslint-disable react/prop-types */
import Styles from "./Button.module.css";

export default function Button({ text }) {
  return <button className={Styles.Button}>{text}</button>;
}
