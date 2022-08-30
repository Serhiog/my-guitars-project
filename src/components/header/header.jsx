import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { paths } from "../../consts";
import { useLocation, Link } from "react-router-dom";

function Header({ selectedGuitarsID }) {

  const location = useLocation();
  const [burger, setBurger] = useState(false);

  const handleBurgerOpen = () => {
    setBurger(true);
  };
  const handleBurgerClose = () => {
    setBurger(false);
  };

  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
  }, [width]);

  window.addEventListener(`resize`, () => {
    setWidth(window.innerWidth);
  });

  const handleCart = (evt) => {
    evt.preventDefault();
    location(paths.cart);
  };

  const handleCatalog = (evt) => {
    evt.preventDefault();
    location(paths.main);
  };

  return (
    <header className={burger && width < 769 ? `header header--burger-active` : `header`}>
      <div className="header__inner">
        <button className="header__burger" onClick={handleBurgerOpen}></button>
        <Link to="/">
          <div className="header__logo">
          </div>
        </Link>
        <ul className="header__nav">
          <li className="header__nav-item">
            <button className="header__nav-item-close" onClick={handleBurgerClose}></button>
          </li>
          <li className="header__nav-item">
            <Link tabIndex={0} className="header__nav-item-link" to="/" onClick={() => handleCatalog}>Каталог</Link>
          </li>
          <li className="header__nav-item">
            <Link tabIndex={0} className="header__nav-item-link" to="/"> Где купить?</Link>
          </li>
          <li className="header__nav-item">
            <Link tabIndex={0} className="header__nav-item-link" to="/">О компании</Link>
          </li>
          <li className="header__nav-item header__nav-item--services">
            <Link tabIndex={0} className="header__nav-item-link" to="/">Cервис-центры</Link>
          </li>
          <li className="header__nav-item header__nav-item--shops">
            <Link tabIndex={0} className="header__nav-item-link" to="/">Магазины</Link>
          </li>
        </ul>
        <ul className="header__user">
          <li className="header__user-item header__user-item--location">
            <Link tabIndex={0} className="header__user-item-link" to="/">Location</Link>
          </li>
          <li className="header__user-item header__user-item--search">
            <Link tabIndex={0} className="header__user-item-link" to="/">Search</Link>
          </li>
          <li className="header__user-item header__user-item--cart">
            <Link tabIndex={0} className="header__user-item-link header__user-item-link--cart" to="/" onClick={() => handleCart}>
              Cart
              <span className="header__user-item-link-count">{selectedGuitarsID.length > 0 && selectedGuitarsID.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header >
  );
}

const mapStateToProps = (state) => ({
  selectedGuitarsID: state.selectedGuitarsID
});

export default connect(mapStateToProps)(Header);
