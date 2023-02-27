import React, { Fragment } from "react";
import Card from "./Card";

interface ICard {
  id: number,
  name?: string,
  username: string,
  email: string
}

const CardList = ({ robots } : any) => {
  return (
    <Fragment>
      {robots.map((user: ICard, i: number) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            username={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </Fragment>
  );
};

export default CardList;
