import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = (props: ICard) => {
  return (
    <div data-testid='card' className={styles.Card}>
      <h2>{props.title}</h2>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Card;
