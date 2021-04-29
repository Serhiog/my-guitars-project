import Characteristics from "../characteristics/characteristics";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";
import { useState } from "react";
import { menuTabs } from "../../consts";
import React from "react";


function Menu() {

  const [selectedTab, setSelectedTab] = useState(menuTabs.char);

  const handleTabBtn = (evt) => {
    evt.preventDefault();
    let tab = evt.target.dataset.name;
    tab === menuTabs.char ? setSelectedTab(menuTabs.char) : tab === menuTabs.reviews ? setSelectedTab(menuTabs.reviews) : setSelectedTab(menuTabs.contacts);
  };

  return (
    <section className="menu">
      <div className="menu__inner">
        <ul className="menu__list">
          <li className={selectedTab === `char` ? `menu__list-item menu__list-item--active` : `menu__list-item`}>
            <button className="menu__list-link" aria-label="Характеристики" data-name="char" onClick={handleTabBtn} >Характеристики</button>
          </li>
          <li className={selectedTab === `reviews` ? `menu__list-item menu__list-item--active` : `menu__list-item`} >
            <button className="menu__list-link" aria-label="Отзывы" data-name="reviews" onClick={handleTabBtn}>Отзывы</button>
          </li>
          <li className={selectedTab === `contacts` ? `menu__list-item menu__list-item--active` : `menu__list-item`} >
            <button className="menu__list-link" aria-label="Контакты" data-name="contacts" onClick={handleTabBtn}>Контакты</button>
          </li>
        </ul>
        {selectedTab === menuTabs.char && < Characteristics />}
        {selectedTab === menuTabs.reviews && <Reviews />}
        {selectedTab === menuTabs.contacts && <Contacts />}
      </div >
    </section >

  );
}

export default Menu;
