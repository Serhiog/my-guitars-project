import star from "../../img/star-no-filled.svg";
import filledStar from "../../img/Star-filled.svg";
import React from "react";


function ReviewItem({review}) {
  return (
    <li key={review.id} className="reviews__wrapper-item">
      <p className="reviews__name">{review.name}</p>
      <ul className="reviews__list">
        <li className="reviews__item reviews__item--advanteges">Достоинства<span className="reviews__item-advanteges-info">{review.advan}</span></li>
        <li className="reviews__item reviews__item--disadvanteges">Недостатки<span className="reviews__item-disadvanteges-info">{review.disAdvan}</span></li>
        <li className="reviews__item">Комментарий
          <p className="reviews__item-message">{review.message}</p>
        </li>
      </ul>
      <div className="reviews__rating">
        <ul className="reviews__rating-list">
          <li className="reviews__rating-item">
            <a className="reviews__rating-item-link" href="/">
              < img className="reviews__rating-item-star  reviews__rating-item-star--active" src={review.rating >= 1 ? filledStar : star} alt="star" />
            </a>
          </li>
          <li className="reviews__rating-item">
            <a className="reviews__rating-item-link" href="/">
              < img className="reviews__rating-item-star  reviews__rating-item-star--active" src={review.rating >= 2 ? filledStar : star} alt="star" />
            </a>
          </li>
          <li className="reviews__rating-item">
            <a className="reviews__rating-item-link" href="/">
              < img className="reviews__rating-item-star  reviews__rating-item-star--active" src={review.rating >= 3 ? filledStar : star} alt="star" />
            </a>
          </li>
          <li className="reviews__rating-item">
            <a className="reviews__rating-item-link" href="/">
              < img className="reviews__rating-item-star" src={review.rating >= 4 ? filledStar : star} alt="star" />
            </a>
          </li>
          <li className="reviews__rating-item">
            <a className="reviews__rating-item-link" href="/">
              < img className="reviews__rating-item-star" src={review.rating >= 5 ? filledStar : star} alt="star" />
            </a>
          </li>
        </ul>
        <a className="reviews__rating-advise" href="/">Советует</a>
      </div>
      <div className="reviews__answer">
        <span className="reviews__time">1 минуту назад</span>
        <a className="reviews__send-answer" href="/">Ответить</a>
      </div>
    </li>);
}

export default ReviewItem;
