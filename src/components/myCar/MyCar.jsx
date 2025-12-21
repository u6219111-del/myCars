import { useEffect, useState } from "react";
import { getCars } from "../../api/myCars";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./MyCar.css";

function MyCar() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    async function loadCars() {
      try {
        setLoading(true);
        const data = await getCars();
        setCars(data);
      } catch (err) {
        setError(t("failed_load_cars"));
      } finally {
        setLoading(false);
      }
    }

    loadCars();
  }, [t]);

  if (loading) {
    return <div className="loading">{t("loading_cars")}</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!cars.length) {
    return <div className="empty">{t("no_cars_found")}</div>;
  }

  return (
    <div className="cars-section">
      <div className="cars-header">
        <h2 className="cars-title">{t("choose_car_suits")}</h2>

        <Link to="/vehicles" className="cars-link">
          {t("view_all")} →
        </Link>
      </div>

      <div className="cars-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <img src={car.image_url} alt={car.name} />
            </div>

            <div className="car-body">
              <div className="car-head">
                <div>
                  <h3 className="car-name">{car.name}</h3>
                  <span className="car-category">{car.category}</span>
                </div>
                <span className="car-price">${car.price}</span>
              </div>

              <div className="car-specs">
                <span>
                  <img src="/src/assets/svg/korobka.svg" alt="" />
                  {car.automat ? t("automatic") : t("manual")}
                </span>
                <span>
                  <img src="/src/assets/svg/gaz.svg" alt="" />
                  {car.engine_volume}
                </span>
                <span>
                  <img src="/src/assets/svg/snow.svg" alt="" />
                  {car.air_conditioner ? t("air_conditioner") : t("no_ac")}
                </span>
              </div>

              <button
                className="car-btn"
                onClick={() => navigate(`/car/${car.id}`)}
              >
                {t("view_details")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCar;
