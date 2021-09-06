import React from "react";

import s from "./kaspersky-info.module.scss";
import OsButtons from "../os-buttons/os-buttons";

function KasperskyInfo() {
  
  return (
    <section className={s.kasperskyInfo} id="kaspersky-info">
      
        <h1 className={s.kasperskyInfo__title}>Don’t let malware defeat you</h1>
        <div className={s.kasperskyInfo__line}></div>
        <p className={s.kasperskyInfo__caption}>
          Protect your devices with a security suite made for gamers
        </p>
        <ul className={s.kasperskyInfo__specification}>
          <li className={s.kasperskyInfo__specificationItem}>
            Gaming mode:
            <span className={s.kasperskyInfo__specificationItemSpan}>
              {" "}
              Ensures optimal PC performance while you play
            </span>
          </li>
          <li className={s.kasperskyInfo__specificationItem}>
            100% detection rate:
            <span className={s.kasperskyInfo__specificationItemSpan}>
              {" "}
              Never misses a threat
            </span>
          </li>
          <li className={s.kasperskyInfo__specificationItem}>
            Cutting-edge cybersecurity:
            <span className={s.kasperskyInfo__specificationItemSpan}>
              {" "}
              Runs on AI overseen by world-leading threat analysts
            </span>
          </li>
        </ul>
        <OsButtons />
      
    </section>
  );
}

export default KasperskyInfo;
