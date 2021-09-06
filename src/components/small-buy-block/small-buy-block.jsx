import React from "react";
import s from "./small-buy-block.module.scss";


function SmallBuyBlock({appear, hide, fullBuyBlockShow}) {
  return (
    <div className={`${s.smallBuyBlock} ${s[`smallBuyBlock_${appear}`]} ${s[`smallBuyBlock_${hide}`]}`}>
      
        <div className={s.smallBuyBlock__details}>
          <p className={s.smallBuyBlock__title}>Kaspersky Internet Security</p>
          <button className={s.smallBuyBlock__detailsButton} onClick={fullBuyBlockShow}>
            <span className={s.smallBuyBlock__detailsButton__span}>£35.99</span> - 3 Devices, 1 year
          </button>
        </div>
        <button className={s.smallBuyBlock__button}>Buy Now</button>
    </div>
  );
}

export default SmallBuyBlock;
