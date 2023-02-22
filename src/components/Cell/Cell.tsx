import { FC } from "react";
import { CellState } from "../../types";

import cn from "classnames";

import s from "./cell.module.scss";

interface CellProps {
  updateFlag: (e, x, y) => void;
  cellDetails: CellState;
  openCell: (x, y) => void;
}

const Cell: FC<CellProps> = ({ updateFlag, cellDetails, openCell }) => {
  return (
    <button
      onClick={() => openCell(cellDetails.x, cellDetails.y)}
      onContextMenu={(e) => updateFlag(e, cellDetails.x, cellDetails.y)}
      className={cn(s.cell, {
        [s.blue]: cellDetails.value === 1,
        [s.green]: cellDetails.value === 2,
        [s.red]: cellDetails.value === 3,
        [s.darkBlue]: cellDetails.value === 4,
        [s.brown]: cellDetails.value === 5,
        [s.turquoise]: cellDetails.value === 6,
        [s.black]: cellDetails.value === 7,
        [s.white]: cellDetails.value === 8,
        [s.gray]: cellDetails.value === 0 && cellDetails.open,
      })}
    >
      {!cellDetails.open && cellDetails.flagged
        ? "🚩"
        : cellDetails.open && cellDetails.value !== 0
        ? cellDetails.value === "x"
          ? "💣"
          : cellDetails.value
        : ""}
    </button>
  );
};

export default Cell;
