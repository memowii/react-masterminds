import React from "react";

export const WinningGame = (): React.ReactElement => (
  <div className="form-group">
    <div className="game-outcome">
      <p>you win</p>
      <button className="btn btn-lg btn-success btn-block">PLAY AGAIN</button>
    </div>
  </div>
);
