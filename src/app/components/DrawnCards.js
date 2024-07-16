"use client";

import React from 'react';

const DrawnCards = ({ cards }) => {
  return (
    <div>
      <h2>Cartas Retiradas:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cards.map((card, index) => (
          <img key={index} src={card.image} alt={`${card.value} of ${card.suit}`} />
        ))}
      </div>
    </div>
  );
};

export default DrawnCards;