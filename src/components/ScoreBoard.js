import React from 'react'

import "./ScoreBoard.scss"

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score xscore ${!xPlaying && "inactive"}`}>X - score {xScore}</span>
      <span className={`score oscore ${xPlaying && "inactive"}`}>O - score {oScore}</span>
    </div>
  )
}
