import React from 'react';
import Card from './Card';

function CardList({ robots }) {
  return (
    <>
      {robots.map((robot) => {
        return (<Card
          key={robot.id}
          name={robot.name}
          id={robot.id}
          email={robot.email}
          userName={robot.username}
        />
        );
      })}
    </>
  );
}

export default CardList;