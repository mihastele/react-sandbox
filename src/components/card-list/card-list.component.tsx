import React from "react";
import { IChar } from "../../definitions/main-defs";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props: any) => {
  return (
    <div className="card-list">
      {props.characters.map((char: IChar) => {
        return <Card key={char.id} character={char}></Card>;
      })}
    </div>
  );
};
