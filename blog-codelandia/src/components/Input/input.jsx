import { forwardRef } from "react";
import search from "../../assets/search.svg";
import style from "./input.module.scss";

export const Input = forwardRef(({ placeholder }) => {
  return (
    <div className={style.input__div}>
      <input className={style.input} type="text" placeholder={placeholder} />
      <img className={style.search} src={search} alt="search" />
    </div>
  );
});
