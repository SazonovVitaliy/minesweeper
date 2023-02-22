import { FC } from "react";
import Link from "next/link";

import Heading from "../../components/Heading/Heading";

import s from "./minesweeperPage.module.scss";

export const MinesweeperPage: FC = () => {
  return (
    <div className={s.container}>
      <Heading>Minesweeper</Heading>
      <section className={s.section}>
        <Link className={s.button} href={"/settings"}>
          Настройки
        </Link>
        <Link className={s.button} href={"/leaderboard"}>
          Таблица лидеров
        </Link>
      </section>
    </div>
  );
};
