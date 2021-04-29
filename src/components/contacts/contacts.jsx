import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from "react";

function Contacts() {

  const mapData = {
    center: [59.968137, 30.316263],
    zoom: 15,
  };

  const coordinates = [
    [59.968137, 30.316263]
  ];
  return (
    <section className="contacts">
      <div className="contacts__inner">
        <ul className="contacts__list">
          <li className="contacts__item">Адрес<span className="contacts__info"><span className="contacts__city">Санкт-Петербург,</span>
          набережная реки Карповки, дом 5</span></li>
          <li className="contacts__item">Режим работы<span className="contacts__info">Ежедневно, с 10:00 до 21:00</span></li>
          <li className="contacts__item">Телефон<span className="contacts__info contacts__info--tel">8 (800) 333-55-99</span></li>
          <li className="contacts__item">E-mail<span className="contacts__info contacts__info--email">info@avto-moto.ru</span></li>
        </ul>
        <div className="contacts__map">
          <YMaps>
            <Map defaultState={mapData} width="431px" height="271px" >
              {coordinates.map((coordinate, i) => <Placemark key={i} geometry={coordinate} />)}
            </Map>
          </YMaps>
        </div>
      </div>
    </section>

  );
}

export default Contacts;
