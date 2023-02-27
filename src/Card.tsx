import React from "react";

interface ICard {
  id: number,
  name?: string,
  username: string,
  email: string
}

const Card = ({ id, username, email } : ICard) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robo" />
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;