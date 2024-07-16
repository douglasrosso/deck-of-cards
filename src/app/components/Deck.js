"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import DrawnCards from "./DrawnCards";
import Card from "./Card";
import "./styles.css";

const Deck = () => {
  const [deck, setDeck] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    const fetchDeck = async () => {
      const result = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      setDeck(result.data);
    };

    fetchDeck();
  }, []);

  const drawCard = async () => {
    if (deck) {
      const result = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
      );
      const card = result.data.cards[0];
      setCurrentCard(card);
      setDrawnCards([...drawnCards, card]);
    }
  };

  const shuffleDeck = async () => {
    if (deck) {
      await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`
      );
      setDrawnCards([]);
      setCurrentCard(null);
    }
  };

  const newDeck = async () => {
    const result = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    setDeck(result.data);
    setDrawnCards([]);
    setCurrentCard(null);
  };

  return (
    <div>
      <button onClick={newDeck}>Novo Baralho</button>
      <button onClick={shuffleDeck}>Reiniciar Baralho</button>
      <button onClick={drawCard}>Retirar Carta</button>
      <div className="container">
        <div className="leg-bottom-left"></div>
        <div className="leg-bottom-right"></div>
        {currentCard && <Card card={currentCard} />}
        <DrawnCards cards={drawnCards} />
      </div>
    </div>
  );
};

export default Deck;
