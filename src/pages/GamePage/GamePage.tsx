import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Board, Button, Timer } from "../../components";
import Heading from "../../components/Heading/Heading";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addToAdvancedTime,
  addToBegginerTime,
  addToIntermediateTime,
} from "../../store/slices/bestTime";

import { atOpen } from "../../utils/atOpen";
import { createField } from "../../utils/createField";

import s from "./gamePage.module.scss";

export const GamePage: FC = () => {
  const dispatch = useAppDispatch();

  const { rows, columns, bombs, timer } = useAppSelector(
    (state) => state.game.settings
  );

  const [field, setField] = useState([]);
  const [nonMinesCount, setNonMinesCount] = useState<number>(0);
  const [stopGame, setStopGame] = useState<boolean>(false);
  const [startGame, setStartGame] = useState<boolean>(true);
  const [win, setWin] = useState<boolean>(false);
  const [mineLocation, setMineLocation] = useState([]);
  let [minesCount, setMinesCount] = useState<number>();

  const {
    bombsCount,
    field: newField,
    minesLocation,
  } = createField(rows, columns, bombs);

  const newGame = () => {
    setNonMinesCount(rows * columns - bombs);
    setField(newField);
    setMineLocation(minesLocation);
    setMinesCount(minesLocation.length);
  };

  useEffect(() => {
    newGame();
  }, []);

  const updateFlag = (e, x, y) => {
    e.preventDefault();

    let newField = JSON.parse(JSON.stringify(field));
    newField[x][y].flagged = !newField[x][y].flagged;
    setField(newField);
    if (!newField[x][y].open) {
      newField[x][y].flagged
        ? setMinesCount((prev) => prev - 1)
        : setMinesCount((prev) => prev + 1);
      if (nonMinesCount === 0) {
        setWin(true);
        setStopGame(true);
        setStartGame(false);
      }
    }
  };

  const openCell = (x, y) => {
    let newField = JSON.parse(JSON.stringify(field));

    if (newField[x][y].open || newField[x][y].flagged) {
      return;
    }

    if (newField[x][y].value === "x") {
      for (let i = 0; i < mineLocation.length; i++) {
        newField[mineLocation[i][0]][mineLocation[i][1]].open = true;
      }
      setField(newField);
      setStopGame(true);
      setStartGame(false);
    } else {
      let newOpenArr = atOpen(newField, x, y, nonMinesCount);
      setField(newOpenArr.arr);
      setNonMinesCount(newOpenArr.newNonMinesCount);
    }
  };

  const restartGame = () => {
    newGame();
    setWin(false);
    setStopGame(false);
    setStartGame(true);
  };

  const addBestTime = (time) => {
    switch (timer) {
      case 10:
        dispatch(addToBegginerTime(time));
        break;
      case 40:
        dispatch(addToIntermediateTime(time));
        break;
      case 100:
        dispatch(addToAdvancedTime(time));
        break;
      default:
        return;
    }
  };

  return (
    <div className={s.container}>
      <section className={s.section}>
        {win && (
          <Heading className={s.win} As="h2">
            Вы победили!
          </Heading>
        )}
        {stopGame && !win && (
          <Heading className={s.win} As="h2">
            Вы проиграли!
          </Heading>
        )}
        <Link className={s.button} href={"/settings"}>
          Настройки игры
        </Link>
        <div className={s.sectionTop}>
          <div>💣: {minesCount}</div>
          <Timer
            win={win}
            stopGame={stopGame}
            timer={timer}
            startGame={startGame}
            addBestTime={addBestTime}
          />
        </div>
        <Board
          stopGame={stopGame}
          field={field}
          openCell={openCell}
          updateFlag={updateFlag}
        />
        <Button className={s.button} onClick={restartGame}>
          Начать заново
        </Button>
      </section>
    </div>
  );
};
