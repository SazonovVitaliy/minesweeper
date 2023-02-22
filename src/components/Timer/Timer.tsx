import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";

interface TimerProps {
  stopGame: boolean;
  startGame: boolean;
  win: boolean;
  addBestTime: (time: number) => void;
}

const Timer: FC<TimerProps> = ({ stopGame, startGame, win, addBestTime }) => {
  const { timer } = useAppSelector((state) => state.game.settings);
  const [time, setTime] = useState<number>(timer * 60);

  let timeIntervalId;

  useEffect(() => {
    if (startGame) {
      const incrementTime = () => {
        let newTime = time - 1;
        setTime(newTime);
      };
      timeIntervalId = setTimeout(() => {
        incrementTime();
      }, 1000);
    }
    if (stopGame && win) {
      addBestTime(timer * 60 - time);
    }
    return () => clearInterval(timeIntervalId);
  }, [time, stopGame, win]);

  return (
    <div>
      <span>⏲️: </span>
      {time}
    </div>
  );
};

export default Timer;
