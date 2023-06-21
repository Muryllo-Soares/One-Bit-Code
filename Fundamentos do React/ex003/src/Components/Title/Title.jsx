/* eslint-disable react/prop-types */
import style from "./Title.module.css";

export default function Title({ children }) {
  return <h2 className={style.text}>
    {children}
    </h2>;
}
