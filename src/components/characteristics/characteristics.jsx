import React from "react";

function Characteristics() {
  return (
    <ul className="menu__data-list">
      <li className="menu__data-list-item">Трансмиссия<span className="menu__data-list-type">Роботизированная</span></li>
      <li className="menu__data-list-item">Мощность двигателя, л.с.<span className="menu__data-list-type">249</span></li>
      <li className="menu__data-list-item">Тип двигателя<span className="menu__data-list-type">Бензиновый</span></li>
      <li className="menu__data-list-item">Привод<span className="menu__data-list-type">Полный</span></li>
      <li className="menu__data-list-item">Объем двигателя, л<span className="menu__data-list-type">2.4</span></li>
      <li className="menu__data-list-item">Макс. крутящий момент<span className="menu__data-list-type">370/4500</span></li>
      <li className="menu__data-list-item">Количество цилиндров<span className="menu__data-list-type">4</span></li>
    </ul>
  );
}

export default Characteristics;
