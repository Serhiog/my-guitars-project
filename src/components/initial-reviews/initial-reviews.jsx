import React from "react";
import star from "../../img/star-no-filled.svg";
import filledStar from "../../img/Star-filled.svg";

function InitialReviews() {
  return (
    <>
      <li className="reviews__wrapper-item">
        <p className="reviews__name">Борис Иванов</p>
        <ul className="reviews__list">
          <li className="reviews__item reviews__item--advanteges">
            Достоинства
            <span className="reviews__item-advanteges-info">
              мощность, внешний вид
            </span>
          </li>
          <li className="reviews__item reviews__item--disadvanteges">
            Недостатки
            <span className="reviews__item-disadvanteges-info">
              Слабые тормозные колодки (пришлось заменить)
            </span>
          </li>
          <li className="reviews__item">
            Комментарий
            <p className="reviews__item-message">
              Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка
              и крут по базовым характеристикам. Не думал, что пересяду на
              китайский автопром, но сейчас гоняю и понимаю, что полностью
              доволен.
            </p>
          </li>
        </ul>
        <div className="reviews__rating">
          <ul className="reviews__rating-list">
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star  reviews__rating-item-star--active"
                  src={filledStar}
                  alt="star"
                />
              </a>
            </li>
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star  reviews__rating-item-star--active"
                  src={filledStar}
                  alt="star"
                />
              </a>
            </li>
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star  reviews__rating-item-star--active"
                  src={filledStar}
                  alt="star"
                />
              </a>
            </li>
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star"
                  src={star}
                  alt="star"
                />
              </a>
            </li>
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star"
                  src={star}
                  alt="star"
                />
              </a>
            </li>
          </ul>
          <a className="reviews__rating-advise" href="/">
            Советует
          </a>
        </div>
        <div className="reviews__answer">
          <span className="reviews__time">1 минуту назад</span>
          <a className="reviews__send-answer" href="/">
            Ответить
          </a>
        </div>
      </li>
      <li className="reviews__wrapper-item">
        <p className="reviews__name">Марсель Исмагилов</p>
        <ul className="reviews__list">
          <li className="reviews__item reviews__item--advanteges">
            Достоинства
            <span className="reviews__item-advanteges-info">
              Cтиль, комфорт, управляемость
            </span>
          </li>
          <li className="reviews__item reviews__item--disadvanteges">
            Недостатки
            <span className="reviews__item-disadvanteges-info">
              {" "}
              Дорогой ремонт и обслуживание
            </span>
          </li>
          <li className="reviews__item">
            Комментарий
            <p className="reviews__item-message">
              Дизайн отличный, управление просто шикарно, ощущения за рулём
              такой машины особые. Но ремонт очень дорогой. Пару месяцев назад
              пришлось менять двигатель. По стоимости вышло как новый
              автомобиль. Так что, если покупать эту машину, надо быть готовым к
              большим расходам на обслуживание.
            </p>
          </li>
        </ul>
        <div className="reviews__rating">
          <ul className="reviews__rating-list">
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star  reviews__rating-item-star--active"
                  src={filledStar}
                  alt="star"
                />
              </a>
            </li>
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star  reviews__rating-item-star--active"
                  src={filledStar}
                  alt="star"
                />
              </a>
            </li>
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star  reviews__rating-item-star--active"
                  src={filledStar}
                  alt="star"
                />
              </a>
            </li>
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star"
                  src={star}
                  alt="star"
                />
              </a>
            </li>
            <li className="reviews__rating-item">
              <a className="reviews__rating-item-link" href="/">
                <img
                  className="reviews__rating-item-star"
                  src={star}
                  alt="star"
                />
              </a>
            </li>
          </ul>
          <a className="reviews__rating-advise" href="/">
            Советует
          </a>
        </div>
        <div className="reviews__answer">
          <span className="reviews__time">1 минуту назад</span>
          <a className="reviews__send-answer" href="/">
            Ответить
          </a>
        </div>
      </li>
    </>
  );
}

export default InitialReviews;