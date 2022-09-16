import React from "react";
// import Logo from "./assets/logo.svg";

import Card from "./components/Card"

const data = [
    "Дэнни Де Вито — Билл Рэго",
    "Грегори Хайнс — сержант Кэсс",
    "Джеймс Ремар — капитан Том Мёрдок",
    "Эд Бегли-младший — Джек Маркин",
    "Клифф Робертсон — полковник Джеймс",
    "Бен Райт — рядовой Освальд",
    "Энн Кьюсак — секретарь Билла"
]
export default () => {
    return <>
        <h2>
            Simple React App
            {/* <img src={Logo} alt="React"/> */}
        </h2>
        <div className="container">
            {data.map(function(el, i) {
                return <Card text={el} cnt={i + 1} />
            })}
        </div>
    </>
}
