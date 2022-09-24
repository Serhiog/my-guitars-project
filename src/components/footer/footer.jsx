import { Link } from "react-router-dom";
import footerLogo from "../../img/footer-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__guitar">
        <div className="footer__inner">
          <div className="footer__wrapper">
            <div className="footer__logo">
              <img src={footerLogo} alt="Логотип в футере" width="67px" height="70px" className="footer__logo-img" />
              <ul className="footer__logo-links">
                <li className="footer__logo-links-item">
                  <Link className="footer__logo-links-item-link footer__logo-links-item-link--facebook" to="facebook.com">Facebook</Link>
                </li>
                <li className="footer__logo-links-item">
                  <Link className="footer__logo-links-item-link footer__logo-links-item-link--instagram" to="instagram.com">Instagram</Link>
                </li>
                <li className="footer__logo-links-item">
                  <Link className="footer__logo-links-item-link footer__logo-links-item-link--twitter" to="twitter.com">Twitter</Link>
                </li>
              </ul>
            </div>
            <div className="footer__about">
              <h4 className="footer__about-title">О нас</h4>
              <p className="footer__about-text1">Магазин гитар,<br></br> музыкальных инструментов<br></br> и гитарная мастерская в Санкт-Петербурге.</p>
              <p className="footer__about-text2">Все инструменты<br></br> проверены, отстроены и доведены до идеала! </p>
            </div>
            <div className="footer__catalog">
              <h4 className="footer__catalog-title">Каталог</h4>
              <ul className="footer__catalog-list">
                <li className="footer__catalog-list-item">
                  <Link to={`!#`} className="footer__catalog-list-item-link">Акустические гитары</Link>
                </li>
                <li className="footer__catalog-list-item">
                  <Link to={`!#`} className="footer__catalog-list-item-link">Классические гитары</Link>
                </li>
                <li className="footer__catalog-list-item">
                  <Link to={`!#`} className="footer__catalog-list-item-link">Электрогитары</Link>
                </li>
                <li className="footer__catalog-list-item">
                  <Link to={`!#`} className="footer__catalog-list-item-link">Бас-гитары</Link>
                </li>
                <li className="footer__catalog-list-item">
                  <Link to={`!#`} className="footer__catalog-list-item-link">Укулеле</Link>
                </li>
              </ul>
            </div>
            <div className="footer__info">
              <h4 className="footer__info-title">Информация</h4>
              <ul className="footer__info-list">
                <li className="footer__info-list-item">
                  <Link to={`!#`} className="footer__info-list-item-link">Где купить?</Link>
                </li>
                <li className="footer__info-list-item">
                  <Link to={`!#`} className="footer__info-list-item-link">Блог</Link>
                </li>
                <li className="footer__info-list-item">
                  <Link to={`!#`} className="footer__info-list-item-link">Вопрос - ответ</Link>
                </li>
                <li className="footer__info-list-item">
                  <Link to={`!#`} className="footer__info-list-item-link">Возврат</Link>
                </li>
                <li className="footer__info-list-item">
                  <Link to={`!#`} className="footer__info-list-item-link">Сервис-центры</Link>
                </li>
              </ul>
            </div>
            <div className="footer__contacts">
              <h4 className="footer__contacts-title">Контакты</h4>
              <p className="footer__contacts-adress">г. Санкт-Петербург,<br></br> м. Невский проспект,<br></br> ул. Казанская 6. <a href="tel:8-812-500-50-50" className="footer__contacts-adress-tel">8-812-500-50-50</a>
              </p>
              <p className="footer__contacts-adress footer__contacts-adress--bottom">Режим работы:</p>
              <span className="footer__contacts-time">с 11:00 до 20:00,</span>
              <p className="footer__contacts-adress">без выходных.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
