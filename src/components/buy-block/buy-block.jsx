import React from "react";
import s from "./buy-block.module.scss";
import productIcons from "../../images/product-icons.png";

function BuyBlock({open, visible }) {
  return (
    <div className={`${s.buyBlock} ${s[`buyBlock_${open}`]} ${s[`buyBlock_${visible}`]}`} id='buy-block'>
      <div className={s.buyBlock__os}>
        <p className={s.buyBlock__os__text}>Compatible with:</p>
        <button className={s.buyBlock__os__windowsButton}></button>
        <button className={s.buyBlock__os__MacOSButton}></button>
        <button className={s.buyBlock__os__AndroidSymbolButton}></button>
        <button className={s.buyBlock__os__IOSButton}></button>
      </div>
      
      <div className={s.buyBlock__container}>
        <div className={s.buyBlock__reviewsCont}>
          <img
            src={productIcons}
            alt="product icons"
            className={s.buyBlock__image}
          />
          <div className={s.buyBlock__reviewsCover}>
            <p className={s.buyBlock__title}>Kaspersky Internet Security</p>
            <div className={s.buyBlock__starsCont}>
              <div className={s.buyBlock__starsContCover}>
                <span className={s.buyBlock__star} ></span>
                <span className={s.buyBlock__star} ></span>
                <span className={s.buyBlock__star} ></span>
                <span className={s.buyBlock__star} ></span>
                <span className={s.buyBlock__halfStar}></span>
              </div>
              <p className={s.buyBlock__starsTitle}>(1503 reviews)</p>
            </div>
          </div>
        </div>

        <div className={s.buyBlock__price}>
          <div className={s.buyBlock__priceBorder}>
          <p className={s.buyBlock__lastPrice}>£34.99</p>
          <p className={s.buyBlock__newPrice}>£35.99</p>
          </div>
          <div className={s.buyBlock__profit}>Save 20%</div>
        </div>
        <div className={s.buyBlock__devices}>
          <select
            className={s.buyBlock__select__form}
            id="devices"
            name="devices"
          >
            <option className={s.buyBlock__select__form__item} value="ibm">
              3 Devices, 1 year
            </option>
            <option className={s.buyBlock__select__form__item} value="ubuntu">
              1 Device, 1 Year £27.99
            </option>
            <option className={s.buyBlock__select__form__item} value="istok">
              1 Device, 2 Years £43.99
            </option>
            <option className={s.buyBlock__select__form__item} value="istok">
              3 Devices, 1 Year £35.99
            </option>
            <option className={s.buyBlock__select__form__item} value="istok">
              3 Devices, 2 Years £63.99
            </option>
            <option className={s.buyBlock__select__form__item} value="istok">
              5 Devices, 1 Year £43.99
            </option>
            <option className={s.buyBlock__select__item} value="istok">
              5 Devices, 2 Years £71.99
            </option>
          </select>
          <button className={s.buyBlock__button}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default BuyBlock;
