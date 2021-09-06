import s from "./app.module.scss";
import React, { useState, useEffect } from "react";
import Header from "../header/header";
import KasperskyInfo from "../kaspersky-info/kaspersky-info";
import BuyBlock from "../buy-block/buy-block";
import SmallBuyBlock from "../small-buy-block/small-buy-block";

function App() {
  const [headerVisible, setHeaderVisible] = useState("");
  const [buyBlockIsVisible, setBuyBlockIsVisible] = useState("");
  const [visibleBlocks, setVisibleBlocks] = useState({
    fullBuyBlock: "",
    smallBuyBlock: "",
  });

  const fullBuyBlockShow = () => {
    setVisibleBlocks({
      fullBuyBlock: "open",
      smallBuyBlock: "hide",
    });
  };

  useEffect(() => {
    let oldScrollY = 0;
    window.addEventListener("scroll", function () {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      let dY = scrolled - oldScrollY;

      if (dY < 0) {
        setHeaderVisible("visible");
      } else {
        setHeaderVisible("");
      }

      oldScrollY = scrolled;
    });
  }, []);

  useEffect(() => {
    const listenScrollEvent = () => {
      const scrollPosition = window.pageYOffset;
      const header = document.getElementById("header");
      const headerCoords = header.getBoundingClientRect();
      const kasperskyInfo = document.getElementById("kaspersky-info");
      const kasperskyInfoCoords = kasperskyInfo.getBoundingClientRect();

      const isShouldBuyBlockAppear = (blockCoordinates) => {
        return (
          blockCoordinates.top - headerCoords.height < 0 &&
          blockCoordinates.top + blockCoordinates.height > headerCoords.height
        );
      };

      if (scrollPosition > 0 && isShouldBuyBlockAppear(kasperskyInfoCoords)) {
        setBuyBlockIsVisible("visible");
      }
      // if (scrollPosition === 0) {
      //   console.log("исчезает блок");
      //   setBuyBlockIsVisible("")
      // }
    };

    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={s.app}>
      <div className={s.app__background}>
        <div className={s.app__picture}>
          <div className={s.app__cover}>
            <Header visible={headerVisible} />
            <KasperskyInfo />
            <BuyBlock
              open={visibleBlocks.fullBuyBlock}
              visible={buyBlockIsVisible}
            />
            <SmallBuyBlock
              hide={visibleBlocks.smallBuyBlock}
              appear={buyBlockIsVisible}
              fullBuyBlockShow={fullBuyBlockShow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
