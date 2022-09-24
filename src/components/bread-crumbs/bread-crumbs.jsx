import { paths } from "../../consts";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {

  const location = useLocation();

  return (
    <div className="crumbs">
      <h1 className="crumbs__title">{location.pathname === paths.main || location.pathname === paths.guitars ? `Каталог гитар` : `Корзина`}</h1>
      <ul className="crumbs__list">
        <li className="crumbs__item">
          <Link tabIndex={0} to={paths.main} className="crumbs__item-link" >Главная</Link>
        </li>
        <li className="crumbs__item">
          <Link tabIndex={0} to={paths.guitars} className="crumbs__item-link">Каталог</Link>
        </li>
        {location.pathname === paths.cart && <li className="crumbs__item">
          <Link tabIndex={0} to={`!#`} className="crumbs__item-link">Оформляем</Link>
        </li>}
      </ul>
    </div >
  );
};

export default BreadCrumbs;
