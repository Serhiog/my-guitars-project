import closeBtn from "../../img/closeBtn.jpg";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { useEffect, useState, useRef } from "react";
import { commonButtons } from "../../consts";
import React from "react";


function Popup({ showPopup, hidePopup, sendMessage, setSelectedStars, stars, resetSelectedStars }) {

  const [clickedStar, setClickedStar] = useState(false);
  const [focus, setFocus] = useState(true);

  const formRef = useRef();
  const nameRef = useRef();

  const handleCloseBtn = (evt) => {
    evt.preventDefault();
    hidePopup();
    document.querySelector("body").style.overflow = "auto"
  };

  const handleDocument = (evt) => {
    if (evt.key === commonButtons.escape) {
      hidePopup();
      document.querySelector("body").style.overflow = "auto"
    }
  };

  const setActiveColorStar = (evt) => {
    resetSelectedStars(stars.length);
    setSelectedStars(+evt.target.dataset.id);
  };

  const setInactiveColorStar = (evt) => {
    setClickedStar(false);
    if (!clickedStar) {
      resetSelectedStars(+evt.target.dataset.id);
    }
  };

  useEffect(() => {
    document.addEventListener(commonButtons.keydown, handleDocument);
    return () => {
      document.removeEventListener(commonButtons.keydown, handleDocument);
    };
  }, []);

  useEffect(() => {
    if (focus) {
      nameRef.current.focus();
    }
  });


  const [name, setName] = useState(false);
  const onChangeName = (evt) => {
    setName(evt.target.value);
    setIsName(false)
  };

  const [advan, setAdvan] = useState();
  const onChangeAdvan = (evt) => {
    setFocus(false);
    setAdvan(evt.target.value);
  };

  const [disadvan, setDisadvan] = useState();
  const onChangeDisAdvan = (evt) => {
    setFocus(false);
    setDisadvan(evt.target.value);
  };

  const [rating, setRating] = useState();
  const onChangeRaiting = (evt) => {
    setFocus(false);
    resetSelectedStars(stars.length);
    setClickedStar(true);
    setRating(evt.target.value);
    resetSelectedStars(evt.target.value);
    setSelectedStars(evt.target.value);
  };

  const [message, setMessage] = useState(false);
  const onChangeMessage = (evt) => {
    setFocus(false);
    setMessage(evt.target.value);
    setIsMessage(false)
  };

  const [isName, setIsName] = useState(false)
  const [isMessage, setIsMessage] = useState(false)

  const handlerOnSubmitForm = (evt) => {
    evt.preventDefault();
    if (!name || !message) {
      return
    }
    sendMessage(name, advan, disadvan, rating, message);
    formRef.current.reset();
    resetSelectedStars(stars.length);
    hidePopup();
    setMessage(false);
    setName(false);
    document.querySelector("body").style.overflow = "auto"
  };

  const handleBtnSubmit = () => {
    if (!name) {
      setIsName(true)
    }
    if (!message) {
      setIsMessage(true)
    }
  }


  return (
    <div className="popup" style={showPopup ? { display: `block` } : { display: `none` }} >
      <div className="popup__inner" onClick={handleCloseBtn}>
        <div className="popup__content" onClick={(evt) => {
          evt.stopPropagation();
        }}>
          <a className="popup__close" href="/" onClick={handleCloseBtn}>
            <img src={closeBtn} alt="close" className="popup__close-img" />
          </a>
          <h2 className="popup__title">Оставить отзыв </h2>
          <form novalidate className="popup__form" onSubmit={handlerOnSubmitForm} ref={formRef}>
            <div className="popup__left-block">
              <input className={isName && !name ? `popup__input popup__input--nocorrect` : `popup__input`} placeholder="Имя" type="text" onChange={onChangeName} ref={nameRef} id={`name`} />
              <label className={isName && !name && `popup__label popup__input-error`} htmlFor={`name`}><span className="popup__label-info">fill you're name</span></label>
              <input className="popup__input" placeholder="Достоинства" type="text" onChange={onChangeAdvan} />
              <input className="popup__input" placeholder="Недостатки" type="text" onChange={onChangeDisAdvan} />
            </div>
            <div className="popup__right-block">
              <div className="popup__rating">
                <div className="popup__value-wrapper">
                  <p className="popup__rating-value">Оцените товар:</p>
                  <div className="popup__rating-list">
                    {stars.map((star) => {
                      return (
                        <div key={star.id} className="popup__inner-common">
                          <input className="popup__rating-item" id={`star-` + star.id} type="radio" name="rating" defaultValue={star.id} onClick={onChangeRaiting} />
                          <label data-id={star.id} className={star.isSelected ? `popup__rating-item-star popup__rating-item-star--active` : `popup__rating-item-star`} htmlFor={`star-` + star.id} onMouseOver={setActiveColorStar} onMouseLeave={setInactiveColorStar}>{`Rating` + star.id}</label>
                        </div>);
                    })}

                  </div>
                </div>
                <span className={isMessage ? `popup__input-error-mesesage popup__test` : `popup__test`}></span>
                <textarea className="popup__message" placeholder="Комментарий" onChange={onChangeMessage} id={`message`}></textarea>
              </div>
            </div>
            <button className="popup__send-btn" type="submit" onClick={handleBtnSubmit}>оставить отзыв</button>
          </form>
        </div>
      </div>
    </div >

  );
}


const mapStateToProps = (state) => ({
  showPopup: state.showPopup,
  stars: state.stars,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  hidePopup() {
    dispatch(ActionCreator.hidePopup());
  },
  sendMessage(name, advan, disAdvan, rating, message) {
    dispatch(ActionCreator.sendMessage({ name, advan, disAdvan, rating, message }));
  },
  setSelectedStars(id) {
    dispatch(ActionCreator.setSelectedStars(id));
  },
  resetSelectedStars(id) {
    dispatch(ActionCreator.resetSelectedStars(id));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Popup);
