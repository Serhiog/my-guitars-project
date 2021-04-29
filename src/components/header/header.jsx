import logo from '../../img/logo-header.svg';
import React from "react";


function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img className="header__img" src={logo} alt="Auto Moto Logo" width="55px" height="55px"/>
          <h1 className="header__title">
                        AVTO
            <span className="header__title header__title--moto">MOTO</span>
          </h1>
        </div>
        <ul className="header__nav">
          <li className="header__nav-item"><a className="header__nav-item-link" href="#">Автомобили</a></li>
          <li className="header__nav-item"><a className="header__nav-item-link" href="#">Контакты</a></li>
          <li className="header__nav-item"><a className="header__nav-item-link" href="#">Услуги</a></li>
          <li className="header__nav-item"><a className="header__nav-item-link" href="#">Вакансии</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
