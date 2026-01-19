import { useTranslation } from 'react-i18next';
import './Facts.css';

function Facts() {
  const { t } = useTranslation();
  
  const stats = [
    {
      img: "/src/assets/svg/miniCar.svg",
      value: "540+",
      label: t('cars'),
    },
    {
      img: "/src/assets/svg/love.svg",
      value: "20k+",
      label: t('customers'),
    },
    {
      img: "/src/assets/svg/kalendar.svg",
      value: "25+",
      label: t('years'),
    },
    {
      img: "/src/assets/svg/timer.svg",
      value: "20m+",
      label: t('miles'),
    },
  ];

  return (
    <section className="facts-section">
      <div className="facts-container">
        <h2>{t('facts_in_numbers')}</h2>
        <p>{t('facts_description')}</p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-cardd">
              <div className="icon-wrapper">
                <img src={stat.img} alt={stat.label} />
              </div>
              <div className="stat-text">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facts;
