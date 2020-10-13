import React, { useState } from "react";

import "./Game.css";
import { getRandomInt } from "../utils";

import { GameDifficulty } from "./GameEnums";
import { DifficultyPanel } from "./DifficultyPanel";
import { GuessInput } from "./GuessInput";
import { GuessButton } from "./GuessButton";
import { WinningGame } from "./WinningGame";

export const Mastermind = () => {
  const [guess, setGuess] = useState<number>(0);
  const [winnerGuess, setWinnerGuess] = useState<number>(generateWinnerGuess());
  const [isThereWinner, setIsThereWinner] = useState<boolean>(true);

  const handleDifficultyChange = (e: React.MouseEvent): void => {
    e.preventDefault();

    const target = e.target as HTMLAnchorElement;

    const anchors: NodeListOf<HTMLAnchorElement> = document.querySelectorAll<
      HTMLAnchorElement
    >("a.nav-link");
    const anchorsArr: HTMLAnchorElement[] = Array.from<HTMLAnchorElement>(
      anchors
    );

    if (target.classList.contains("active")) return;

    anchorsArr.map((anchor) => anchor.classList.remove("active"));

    target.classList.add("active");

    setWinnerGuess(generateWinnerGuess(target.dataset.difficulty as string));
    setGuess(0);
  };

  function generateWinnerGuess(
    difficulty: string = GameDifficulty.Easy
  ): number {
    let winnerGuess: number;

    switch (difficulty) {
      case GameDifficulty.Easy:
        winnerGuess = getRandomInt(0, 10);
        break;
      case GameDifficulty.Medium:
        winnerGuess = getRandomInt(0, 100);
        break;
      case GameDifficulty.Hard:
        winnerGuess = getRandomInt(0, 1000);
        break;
      default:
        winnerGuess = 0;
    }

    return winnerGuess;
  }

  const handleGuessChange = (e: React.ChangeEvent): void => {
    e.persist();
    const guess = (e.target as HTMLInputElement).value;
    const parsedGuess = parseInt(guess, 10);

    if (parsedGuess && !isNaN(parsedGuess)) {
      setGuess(parsedGuess);
    }
  };

  const handleEvaluateGuess = (e: React.MouseEvent) => {
    if (guess === winnerGuess) {
    }
  };

  return (
    <>
      {!isThereWinner ? (
        <>
          <DifficultyPanel onDifficultyChange={handleDifficultyChange} />

          <GuessInput guess={guess} onGuessChange={handleGuessChange} />

          <GuessButton onEvaluateGuess={handleEvaluateGuess} />
        </>
      ) : (
        <WinningGame />
      )}
    </>
  );
};
