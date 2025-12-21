import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './Book.css'; 

function Book() {
  const [book, setBook] = useState(false);
  const { t } = useTranslation();
  
  const handleBook = () => {
    setBook(true);
  };

  return (
    <div className="book-section">
      <img
        className="book-bg"
        src="/src/assets/png/koleso.png"
        alt=""
      />
      
      <div className="book-content">
        <div className="book-text">
          <h1>{t('experience_road')}</h1>
          <p>{t('book_description')}</p>
          <Link to="/vehicles">
            <button className="btn-primary">{t('view_all_cars')}</button>
          </Link>
        </div>

        {!book ? (
          <div className="book-form">
            <h2>{t('book_your_car')}</h2>
            
            <select>
              <option value="">{t('car_type')}</option>
              <option>{t('sports')}</option>
              <option>{t('sedan')}</option>
              <option>{t('suv')}</option>
              <option>{t('van')}</option>
            </select>

            <select>
              <option value="">{t('place_of_rental')}</option>
              <option>{t('downtown_office')}</option>
              <option>{t('airport_terminal')}</option>
              <option>{t('central_station')}</option>
              <option>{t('harbor_point')}</option>
            </select>

            <select>
              <option value="">{t('place_of_return')}</option>
              <option>{t('downtown_office')}</option>
              <option>{t('airport_terminal')}</option>
              <option>{t('central_station')}</option>
              <option>{t('harbor_point')}</option>
            </select>

            <input type="date" />
            <input type="date" />

            <button onClick={handleBook} className="btn-book">{t('book_now')}</button>
          </div>
        ) : (
          <div className="book-success">
            {t('successfully_booked')}
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;
