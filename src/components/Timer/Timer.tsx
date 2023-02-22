import { FC, useEffect, useState } from "react";

interface TimerProps {
  stopGame: boolean;
  startGame: boolean;
  timer: number;
  win: boolean;
  addBestTime: (time: number) => void;
}

const Timer: FC<TimerProps> = ({
  stopGame,
  startGame,
  timer,
  win,
  addBestTime,
}) => {
  const [time, setTime] = useState<number>(0);

  let timeIntervalId;

  useEffect(() => {
    if (startGame) {
      const incrementTime = () => {
        let newTime = time + 1;
        setTime(newTime);
      };
      timeIntervalId = setTimeout(() => {
        incrementTime();
      }, 1000);
    }
    if (stopGame && win) {
      addBestTime(time);
    }
  }, [time, stopGame, win]);

  return (
    <div>
      <span>⏲️: </span>
      {time}
    </div>
  );
};

export default Timer;
