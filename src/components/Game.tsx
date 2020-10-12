import React, { useState } from "react";

import "./Game.css";
import { getRandomInt } from "../utils";

enum GameDifficulty {
  Easy = "EASY",
  Medium = "MEDIUM",
  Hard = "HARD",
}

export const Mastermind = () => {
  const [guess, setGuess] = useState<number>(0);
  const [winnerGuess, setWinnerGuess] = useState<number>(generateWinnerGuess());

  const toggleActive = (e: React.MouseEvent): void => {
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

    console.log("target.dataset.difficulty", target.dataset.difficulty);

    setWinnerGuess(generateWinnerGuess(target.dataset.difficulty as string));
  };

  function generateWinnerGuess(
    difficulty: string = GameDifficulty.Easy
  ): number {
    let winnerGuess: number;

    switch (difficulty) {
      case GameDifficulty.Easy:
        console.log("easy");
        winnerGuess = getRandomInt(0, 10);
        break;
      case GameDifficulty.Medium:
        console.log("med");
        winnerGuess = getRandomInt(0, 100);
        break;
      case GameDifficulty.Hard:
        console.log("hard");
        winnerGuess = getRandomInt(0, 1000);
        break;
      default:
        winnerGuess = 0;
    }

    return winnerGuess;
  }

  return (
    <>
      <div className="form-group">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a
              href="/"
              className="nav-link active"
              data-difficulty={GameDifficulty.Easy}
              onClick={toggleActive}
            >
              EASY
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/"
              className="nav-link"
              data-difficulty={GameDifficulty.Medium}
              onClick={toggleActive}
            >
              MEDIUM
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/"
              className="nav-link"
              data-difficulty={GameDifficulty.Hard}
              onClick={toggleActive}
            >
              HARD
            </a>
          </li>
        </ul>
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control game-display"
          placeholder="Enter number"
          value={guess}
          onChange={(e) => console.log(e)}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-lg btn-success btn-block">GUESS</button>
      </div>
    </>
  );
};
