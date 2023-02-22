import { FC } from "react";
import Cell from "../Cell/Cell";

import cn from "classnames";

import s from "./board.module.scss";

interface BoardProps {
  field;
  updateFlag: (e, x, y) => void;
  openCell: (x, y) => void;
  stopGame: boolean;
}
const Board: FC<BoardProps> = ({ field, updateFlag, openCell, stopGame }) => {
  return (
    <div className={s.container}>
      {field.map((row, rowIndex) => {
        return (
          <div
            className={cn(s.field, {
              [s.disabled]: stopGame,
            })}
            key={rowIndex}
          >
            {row.map((col, colIndex) => (
              <Cell
                openCell={openCell}
                cellDetails={col}
                updateFlag={updateFlag}
                key={`${rowIndex}-${colIndex}`}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
