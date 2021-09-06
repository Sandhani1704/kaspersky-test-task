import React from "react";
import s from "./os-buttons.module.scss";

function OsButtons() {
  return (
    <div className={s.os}>
      <p className={s.os__text}>Compatible with:</p>
      <div className={s.os__buttonsCont}>
        <button className={s.os__windowsButton}></button>
        <button className={s.os__MacOSButton}></button>
        <button className={s.os__AndroidSymbolButton}></button>
        <button className={s.os__IOSButton}></button>
      </div>
    </div>
  );
}

export default OsButtons;
