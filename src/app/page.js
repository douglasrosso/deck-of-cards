"use client";

import React from "react";
import Deck from "./components/Deck";
import "./components/styles.css";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Baralho de Cartas</h1>
      </div>
      <Deck />
      <span>Designed by Douglas Rosso {":)"} © 2024</span>
    </div>
  );
};

export default Home;
