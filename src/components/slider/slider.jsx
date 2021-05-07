
import { useState } from "react";
import { connect } from "react-redux";
import { sliderDirection } from "../../consts";
import { ActionCreator } from "../../store/action";
import React from "react";


function Slider({ picPreviews, bigPics, activePic, getNextPic, getPreviouslyPic }) {

  const [navigateSliderBtnRight, setNavigateSliderBtnRight] = useState(false);
  const [navigateSliderBtnLeft, setNavigateSliderBtnLeft] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const onSliderButtonClick = (evt) => {
    evt.preventDefault();
    let direction = evt.target.dataset.name;
    if (direction === sliderDirection.right) {
      setDisabledBtn(false);
      setNavigateSliderBtnLeft(false);
      if (activePic.id < bigPics.length) {
        getNextPic(activePic.id + 1);
        if (activePic.id === bigPics.length - 1) {
          setNavigateSliderBtnRight(true);
        }
      }
    }

    if (direction === sliderDirection.left) {
      setNavigateSliderBtnRight(false);
      if (activePic.id > 1) {
        getPreviouslyPic(activePic.id - 1);
        if (activePic.id === 2) {
          setNavigateSliderBtnLeft(true);
        }
      }
    }
  };


  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__inner">
          <section className="slider__photo-block">
            <div className="slider__photos">
              <img className="slider__photos-main" src={activePic.pic} alt="Nice car" width="600px" height="375px" />
            </div>
            <div className="slider__nav">
              <button aria-label="left" data-name="left" className={navigateSliderBtnLeft || disabledBtn ? `slider__btn slider__btn--left slider__btn--no-active` : `slider__btn slider__btn--left`} onClick={onSliderButtonClick} type="button" />
              <ul className="slider__list">
                {picPreviews.map((pic) => {
                  return <li key={pic.id} className="slider__item"><img width="128px" height="80px" className="slider__item-pic" src={pic.pic} alt="slider" /></li>;
                })}
              </ul>
              <button aria-label="right" data-name="right" className={navigateSliderBtnRight ? `slider__btn slider__btn--right slider__btn--no-active` : `slider__btn slider__btn--right`} onClick={onSliderButtonClick} type="button" />
            </div>
          </section>
          <section className="offer">
            <div className="offer__inner">
              <h2 className="offer__title">Марпех 11</h2>
              <ul className="offer__list">
                <li className="offer__item offer__item--gasoline">бензин</li>
                <li className="offer__item offer__item--transmisson">механика</li>
                <li className="offer__item offer__item--hp">100 л.с.</li>
                <li className="offer__item offer__item--value">1.4 л</li>
              </ul>
              <div className="offer__price" >
                <p className="offer__price-new">
                  2 300 000 ₽
                </p>
                <p className="offer__price-old">
                  <span className="offer__price-num1">2</span><span className="offer__price-num2">400</span><span className="offer__price-num3">000</span> ₽
                </p>
              </div>
              <button className="offer__send btn" type="button">оставить заявку</button>
              <button className="offer__credit btn" type="button">В КРЕДИТ ОТ 11 000 ₽</button>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  picPreviews: state.picPreviews,
  bigPics: state.bigPics,
  activePic: state.activePic
});

const mapDispatchToProps = (dispatch) => ({
  getNextPic(id) {
    dispatch(ActionCreator.selectNextPic(id));
  },
  getPreviouslyPic(id) {
    dispatch(ActionCreator.selectPreviouslyPic(id));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Slider);
