import { paths } from "../../consts";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {

  const location = useLocation();

  const handleMainLink = (evt) => {
    evt.preventDefault();
    location(paths.main);
  };

  const handleCartLink = (evt) => {
    evt.preventDefault();
    location(paths.cart);
  };


  return (
    <div className="crumbs">
      <h1 className="crumbs__title">{location.pathname === paths.main || location.pathname === paths.guitars ? `Каталог гитар` : `Корзина`}</h1>
      <ul className="crumbs__list">
        <li className="crumbs__item">
          <Link to={`!#`} className="crumbs__item-link" onClick={handleMainLink}>Главная</Link>
        </li>
        <li className="crumbs__item">
          <Link to={`!#`} className="crumbs__item-link" onClick={handleCartLink}>Каталог</Link>
        </li>
        {location.pathname === paths.cart && <li className="crumbs__item">
          <Link to={`!#`} className="crumbs__item-link">Оформляем</Link>
        </li>}
      </ul>
    </div >
  );
};

export default BreadCrumbs;
