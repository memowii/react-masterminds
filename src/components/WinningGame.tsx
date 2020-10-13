import React from "react";
import { REPLCommand } from "repl";

interface WinningGameProps {
  onPlayAgain: (e: React.MouseEvent) => void;
}

export const WinningGame: React.FC<WinningGameProps> = ({
  onPlayAgain,
}): React.ReactElement => (
  <div className="form-group">
    <div className="game-outcome">
      <p>you win</p>
      <button
        className="btn btn-lg btn-success btn-block"
        onClick={onPlayAgain}
      >
        PLAY AGAIN
      </button>
    </div>
  </div>
);
