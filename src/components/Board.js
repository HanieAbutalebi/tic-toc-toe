import React from 'react'

import { BoxItem } from "./BoxItem"
import "./Board.scss"

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {
        board.map((value, idx) => {
          return <BoxItem key={idx} value={value} onClick={() => value === null && onClick(idx)} />;
        })
      }
    </div>
  )
}
