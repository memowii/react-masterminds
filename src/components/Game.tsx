import React, { useState } from "react";

import "./Game.css";
import { getRandomInt } from "../utils";

import { GameDifficulty, DifficultyMaxValue } from "./GameEnums";
import { DifficultyPanel } from "./DifficultyPanel";
import { GuessInput } from "./GuessInput";
import { GuessButton } from "./GuessButton";
import { WinningGame } from "./WinningGame";

export const Mastermind = () => {
  const [userGuess, setUserGuess] = useState<number>(0);
  const [winnerGuess, setWinnerGuess] = useState<number>(generateWinnerGuess());
  const [maxValue, setMaxValue] = useState<number>(DifficultyMaxValue.Easy);
  const [isThereWinner, setIsThereWinner] = useState<boolean>(false);

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

    const { difficulty } = target.dataset;
    setWinnerGuess(generateWinnerGuess(difficulty as string));
    setUserGuess(0);

    if (difficulty === GameDifficulty.Easy) {
      setMaxValue(DifficultyMaxValue.Easy);
    } else if (difficulty === GameDifficulty.Medium) {
      setMaxValue(DifficultyMaxValue.Medium);
    } else {
      setMaxValue(DifficultyMaxValue.Hard);
    }
  };

  function generateWinnerGuess(
    difficulty: string = GameDifficulty.Easy
  ): number {
    let winnerGuess: number;

    switch (difficulty) {
      case GameDifficulty.Easy:
        winnerGuess = getRandomInt(0, DifficultyMaxValue.Easy);
        break;
      case GameDifficulty.Medium:
        winnerGuess = getRandomInt(0, DifficultyMaxValue.Medium);
        break;
      case GameDifficulty.Hard:
        winnerGuess = getRandomInt(0, DifficultyMaxValue.Hard);
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
      setUserGuess(parsedGuess);
    }
  };

  const handleGuessClick = (e: React.MouseEvent): void => {
    if (userGuess === winnerGuess) {
      setIsThereWinner(true);
      return;
    }

    const accuraccy = getAccuracy();
    
    // generate indicator
    // generate sugestion
  };

  const getAccuracy = (): number => {
    const difference = Math.abs(winnerGuess - userGuess);
    return difference / maxValue;
  };

  const handlePlayAgain = (e: React.MouseEvent): void => {
    setIsThereWinner(false);
    setUserGuess(0);
    setWinnerGuess(generateWinnerGuess());
  };

  return (
    <>
      {!isThereWinner ? (
        <>
          <DifficultyPanel onDifficultyChange={handleDifficultyChange} />

          <GuessInput guess={userGuess} onGuessChange={handleGuessChange} />

          <GuessButton onEvaluateGuess={handleGuessClick} />
        </>
      ) : (
        <WinningGame onPlayAgain={handlePlayAgain} />
      )}
    </>
  );
};
