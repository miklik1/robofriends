import React from 'react'

interface ICard {
  id: number
  name?: string
  username: string
  email: string
}

const Card: React.FunctionComponent<ICard> = ({ id, username, email }: ICard) => {
  return (
    <div className="tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robo" className="bg-dark-gray br3"/>
      <div className="black">
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
