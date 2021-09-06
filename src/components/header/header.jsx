import React from "react";
import s from "./header.module.scss";
import headerLogo from '../../images/kaspersky-logo.png'

function Header({ visible }) {
  return (
    <div className={`${s.header} ${s[`header_${visible}`]}`} id="header">
      <div className={s.header__overlay}>
        <div className={s.header__container}>
          <a href="/" className={s.header__link}><img className={s.header__logo} src={headerLogo} alt="логотип kaspersky"/></a>
          <select
            className={s.header__selectForm}
            id="currency"
            name="currency"
          >
            <option className={s.header__selectForm__item} value="GBP">
              GBP
            </option>
            <option className={s.header__selectForm__item} value="EUR">
              EUR
            </option>
            <option className={s.header__selectForm__item} value="USD">
              USD
            </option>
            <option className={s.header__selectForm__item} value="RUB">
              RUB
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
