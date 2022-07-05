import React from "react";

import { IVehicle } from 'types/'

import styles from "./Card.module.scss";


type OmitFields = 'createdAt' | 'color' | 'isFavorite' | 'plate' | 'id'
type CardVehicle = Omit<IVehicle, OmitFields>

interface ICard {
  title: string;
  vehicle: CardVehicle;
}

const Card = ({ vehicle }: ICard) => {
  return (
    <div data-testid='card' className={styles.Card}>
      <h2>{vehicle.name}</h2>

      <div className={styles.content}>
        <p>{vehicle.price}</p>
        <p>{vehicle.description}</p>
        <p>{vehicle.year}</p>
      </div>
    </div>
  );
};

export default Card;
