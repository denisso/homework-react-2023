"use client";
import React from "react";
import styles from "./accordion.module.scss";

type EventHandlerOpenClose = (event: React.MouseEvent<HTMLDivElement>) => void;

type EventHandlerTransitionEnd = (
  event: React.TransitionEvent<HTMLDivElement>
) => void;

const Accordion = ({ title, text }: { title: string; text: string }) => {
  const refTextNode = React.useRef<HTMLDivElement>(null);
  const [classShow, setClassShow] = React.useState(false);
  const show = React.useRef(false);

  const [heightDropDown, setHeightDropDown] = React.useState<{
    height?: string;
  }>({ height: "0px" });

  const handleOpenClose: EventHandlerOpenClose = (e) => {
    e.stopPropagation();
    if (refTextNode.current === null) return;
    // каждый клик на заголовке элемента замеряем текущую высоту текста, с которым нужно работать во время transition
    const heightContent =
      refTextNode.current.getBoundingClientRect().height + "px";
    if (!show.current) {
      show.current = true;
      setHeightDropDown({height: heightContent});
    } else {
      show.current = false;
      if (classShow) {
        setHeightDropDown({height: heightContent});
        setTimeout(() => {
          setClassShow(false);
          setHeightDropDown({});
        }, 0);
      }
      else{
        setHeightDropDown({});
      }
    }
  };
  // когда элемент открыт полностью / закончил анимацию, делаем его назависимым от высоты
  const handleTransitionEnd: EventHandlerTransitionEnd = (e) => {
    e.stopPropagation();
    if (show.current) {
      setClassShow(true);
      setHeightDropDown({});
    }
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={handleOpenClose}>
        {title}
      </div>
      <div
        className={`${styles.dropDown} ${classShow ? styles.show : ""}`}
        onTransitionEnd={handleTransitionEnd}
        style={heightDropDown}
      >
        <div className={styles.text} ref={refTextNode}>
          {text}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Accordion;
