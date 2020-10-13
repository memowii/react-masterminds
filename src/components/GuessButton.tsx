import React from "react";

interface GuessButtonProps {
  onEvaluateGuess: (e: React.MouseEvent) => void;
}

export const GuessButton: React.FC<GuessButtonProps> = ({
  onEvaluateGuess,
}) => {
  return (
    <div className="form-group">
      <button
        className="btn btn-lg btn-success btn-block"
        onClick={onEvaluateGuess}
      >
        GUESS
      </button>
    </div>
  );
};
