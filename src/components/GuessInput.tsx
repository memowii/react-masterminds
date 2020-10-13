import React from "react";

interface GuessInputProps {
  guess: number;
  onGuessChange: (e: React.ChangeEvent) => void;
}

export const GuessInput: React.FC<GuessInputProps> = ({
  guess,
  onGuessChange,
}) => {
  return (
    <div className="form-group">
      <input
        type="number"
        className="form-control game-display"
        placeholder="Enter number"
        value={guess}
        onChange={onGuessChange}
      />
    </div>
  );
};
