import React from "react";

import './Game.css'

export const Mastermind = () => {
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
  };

  return (
    <>
      <div className="form-group">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a href="/" className="nav-link active" onClick={toggleActive}>
              EASY
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={toggleActive}>
              MEDIUM
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={toggleActive}>
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
          defaultValue="0"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-lg btn-success btn-block">GUESS</button>
      </div>
    </>
  );
};
