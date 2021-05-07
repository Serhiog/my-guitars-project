import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { useState } from "react";
import { useEffect } from "react";
import ReviewItem from "../review-item/review-item";
import React from "react";
import InitialReviews from "../initial-reviews/initial-reviews"


function Reviews({ showPopup, reviews }) {


  const handlerSendReviewBtn = (evt) => {
    evt.preventDefault();
    document.querySelector("body").style.overflow = "hidden"
    showPopup();
  };

  const [state, setState] = useState();

  useEffect(() => {
    if (reviews.length >= 1) {
      localStorage.setItem(`dataForm`, JSON.stringify(reviews));
    }
  });

  useEffect(() => {
    const data = localStorage.getItem(`dataForm`);
    setState(JSON.parse(data));
  }, []);


  return (
    <section className="reviews">
      <div className="reviews__inner">
        <a className="reviews__send-review" href="/" onClick={handlerSendReviewBtn}>оставить отзыв</a>
        <ul className="reviews__wrapper">
          <InitialReviews />
          {reviews && reviews.map((review) => {
            return <ReviewItem review={review} key={review.id} />;
          })}
          {state && state.map((review) => {
            return <ReviewItem review={review} key={review.id} />;
          })}
        </ul>
      </div>
    </section>

  );
}


const mapStateToProps = (state) => ({
  picPreviews: state.picPreviews,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  showPopup() {
    dispatch(ActionCreator.showPopup());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
