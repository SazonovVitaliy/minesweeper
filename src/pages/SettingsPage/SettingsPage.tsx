import { FC } from "react";
import Link from "next/link";

import Heading from "../../components/Heading/Heading";

import { useAppDispatch } from "../../store/hooks";
import { setGameSettings } from "../../store/slices/game";

import { advanced, beginner, intermediate } from "../../utils/const";

import s from "./settingsPage.module.scss";

export const SettingsPage: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.container}>
      <Heading className={s.heading}>Выберите уровень сложности</Heading>
      <section className={s.section}>
        <Link
          className={s.button}
          onClick={() => dispatch(setGameSettings(beginner))}
          href={"/game"}
        >
          Простой
        </Link>
        <Link
          className={s.button}
          onClick={() => dispatch(setGameSettings(intermediate))}
          href={"/game"}
        >
          Средний
        </Link>
        <Link
          className={s.button}
          onClick={() => dispatch(setGameSettings(advanced))}
          href={"/game"}
        >
          Сложный
        </Link>
      </section>
    </div>
  );
};
