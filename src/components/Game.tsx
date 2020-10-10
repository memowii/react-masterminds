import React from "react";

export const Mastermind = () => {
  return (
    <>
      <div className="form-group">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a href="/" className="nav-link active">
              EASY
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link ">
              MEDIUM
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              HARD
            </a>
          </li>
        </ul>
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control game-display"
          placeholder="enter number"
          value="0"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-lg btn-success btn-block">GUESS</button>
      </div>
    </>
  );
};
