import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { getPadTime } from "../../utils/getPadTime";

interface TimerProps {
  stopGame: boolean;
  startGame: boolean;
  win: boolean;
  addBestTime: (time: number) => void;
}

const Timer: FC<TimerProps> = ({ stopGame, startGame, win, addBestTime }) => {
  const { timer } = useAppSelector((state) => state.game.settings);
  const [timeLeft, setTimeLeft] = useState<number>(timer * 60);

  const hours = getPadTime(Math.floor(timeLeft / 3600));
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - Number(minutes) * 60);

  const resetTimer = () => {
    setTimeLeft(timer * 60);
  };

  useEffect(() => {
    const timeIntervalId = setTimeout(() => {
      if (startGame) {
        setTimeLeft(timeLeft >= 1 ? timeLeft - 1 : 0);
      } else {
        resetTimer();
      }
    }, 1000);
    if (win) {
      clearTimeout(timeIntervalId);
      addBestTime(timer * 60 - timeLeft);
    }
    return () => {
      clearTimeout(timeIntervalId);
    };
  }, [stopGame, win, startGame, timeLeft]);

  return (
    <div>
      <span>⏲️: </span>
      {hours}ч:{minutes}м:{seconds}с
    </div>
  );
};

export default Timer;
