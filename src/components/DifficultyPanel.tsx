import React from "react";

import { GameDifficulty } from "./GameEnums";

interface DifficultyPanelProps {
  onDifficultyChange: (e: React.MouseEvent) => void;
}

export const DifficultyPanel: React.FC<DifficultyPanelProps> = ({
  onDifficultyChange,
}) => {
  return (
    <div className="form-group">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a
            href="/"
            className="nav-link active"
            data-difficulty={GameDifficulty.Easy}
            onClick={onDifficultyChange}
          >
            EASY
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link"
            data-difficulty={GameDifficulty.Medium}
            onClick={onDifficultyChange}
          >
            MEDIUM
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link"
            data-difficulty={GameDifficulty.Hard}
            onClick={onDifficultyChange}
          >
            HARD
          </a>
        </li>
      </ul>
    </div>
  );
};
