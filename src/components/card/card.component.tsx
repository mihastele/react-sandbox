import React from "react";
import { ICardEntry } from "../../definitions/main-defs";
import "./card.styles.css";

export const Card = (props: ICardEntry) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.character.id}?set=set2&size=180x180`}
        alt="Character img"
      />
      <h2>{props.character.name}</h2>
      <p>{props.character.email}</p>
    </div>
  );
};
