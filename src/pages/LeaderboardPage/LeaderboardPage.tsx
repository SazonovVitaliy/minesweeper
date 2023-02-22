import { FC } from "react";
import Heading from "../../components/Heading/Heading";

import { useAppSelector } from "../../store/hooks";
import { sortArr } from "../../utils/sort";

import s from "./leaderboardPage.module.scss";

export const LeaderboardPage: FC = () => {
  const { advanced, beginner, intermediate } = useAppSelector(
    (state) => state.bestTime
  );

  return (
    <div className={s.container}>
      <Heading>Лучшее время</Heading>
      <section className={s.section}>
        <div className={s.timeBlocks}>
          <Heading>Простой уровень</Heading>
          <ul>
            {beginner.length ? (
              sortArr(beginner).map((time) => (
                <li key={Math.random()}>{time} сек.</li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className={s.timeBlocks}>
          <Heading>Средний уровень</Heading>
          <ul>
            {intermediate.length ? (
              sortArr(intermediate).map((time) => (
                <li className={s.listItem} key={Math.random()}>
                  {time} сек.
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className={s.timeBlocks}>
          <Heading>Сложный уровень</Heading>
          <ul>
            {advanced.length ? (
              sortArr(advanced).map((time) => (
                <li key={Math.random()}>{time} сек.</li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};
