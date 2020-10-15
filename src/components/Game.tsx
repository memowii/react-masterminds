import React, { useState } from "react";

import "./Game.css";
import { getRandomInt } from "../utils";

import { GameDifficulty, DifficultyMaxValue } from "./GameEnums";
import { DifficultyPanel } from "./DifficultyPanel";
import { GuessInput } from "./GuessInput";
import { GuessButton } from "./GuessButton";
import { WinningGame } from "./WinningGame";
import { GameIndicator } from "./GameIndicator";

interface GameIndicatorI {
  accuracy?: number;
  suggestion?: string;
}

export const Mastermind = () => {
  const [userGuess, setUserGuess] = useState<number>(0);
  const [winnerGuess, setWinnerGuess] = useState<number>(generateWinnerGuess());
  const [maxValue, setMaxValue] = useState<number>(DifficultyMaxValue.Easy);
  const [isThereWinner, setIsThereWinner] = useState<boolean>(false);
  const [indicatorProps, setIndicatorProps] = useState<GameIndicatorI>({});

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
    setIndicatorProps({});

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

    const accuracy = getAccuracy();
    const suggestion = userGuess > winnerGuess ? "smaller" : "bigger";

    setIndicatorProps({
      accuracy,
      suggestion,
    });
  };

  const getAccuracy = (): number =>
    Math.abs(winnerGuess - userGuess) / maxValue;

  const handlePlayAgain = (e: React.MouseEvent): void => {
    setIsThereWinner(false);
    setUserGuess(0);
    setWinnerGuess(generateWinnerGuess());
    setIndicatorProps({});
  };

  return (
    <>
      {!isThereWinner ? (
        <>
          <DifficultyPanel onDifficultyChange={handleDifficultyChange} />

          <GuessInput guess={userGuess} onGuessChange={handleGuessChange} />

          <GuessButton onEvaluateGuess={handleGuessClick} />

          {Object.keys(indicatorProps).length > 0 && (
            <GameIndicator
              accuracy={indicatorProps.accuracy as number}
              suggestion={indicatorProps.suggestion as string}
            />
          )}
        </>
      ) : (
        <WinningGame onPlayAgain={handlePlayAgain} />
      )}
    </>
  );
};
