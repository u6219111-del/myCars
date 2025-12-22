import { getCarss } from "../../api/allCars";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useTranslation } from "react-i18next";
import "./Vehicles.css";

function Vehicles() {
  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState("All Vehicles");
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();
  const { t } = useTranslation();

  useEffect(() => {
    async function loadCars() {
      const data = await getCarss();
      setCars(data);
    }
    loadCars();
  }, []);

  const filteredCars =
    filter === "All Vehicles"
      ? cars
      : cars.filter(
          (car) => car.category.toLowerCase() === filter.toLowerCase()
        );

  const handleAddToCart = (car) => {
    addToCart(car);
    
  };

  const handleToggleFavorite = (car) => {
    if (isFavorite(car.id)) {
     
    } else {
      addToFavorites(car);

    }
  };

  return (
    <div className="vehicles-page">
      <h1 className="vehicles-title">{t("select_vehicle_group")}</h1>

      <div className="vehicles-filters">
        <button onClick={() => setFilter("All Vehicles")}>
          {t("all_vehicles")}
        </button>
        <button onClick={() => setFilter("Miniven")}>{t("minivan")}</button>
        <button onClick={() => setFilter("Sport")}>{t("sport")}</button>
        <button onClick={() => setFilter("SUV")}>{t("suv")}</button>
        <button onClick={() => setFilter("Sedan")}>{t("sedan")}</button>
        <button onClick={() => setFilter("Cabriolet")}>{t("cabriolet")}</button>
      </div>

      <div className="vehicles-grid">
        {filteredCars.map((car) => (
          <div key={car.id} className="vehicle-card">
            <div className="vehicle-image">
              <img src={car.image_url} alt={car.name} />

              <button
                className={`favorite-btn ${isFavorite(car.id) ? "active" : ""}`}
                onClick={() => handleToggleFavorite(car)}
              >
                ♥
              </button>
            </div>

            <div className="vehicle-content">
              <div className="vehicle-header">
                <div className="vehicle-title">
                  <h2>{car.name}</h2>
                  <p>{car.category}</p>
                </div>
                <span className="vehicle-price">${car.price}</span>
              </div>

              <div className="vehicle-specs">
                <div>
                  <img src="/src/assets/svg/korobka.svg" alt="" />
                  <span>{car.automat ? t("automatic") : t("manual")}</span>
                </div>
                <div>
                  <img src="/src/assets/svg/gaz.svg" alt="" />
                  <span>PB 95</span>
                </div>
                <div>
                  <img src="/src/assets/svg/snow.svg" alt="" />
                  <span>
                    {car.air_conditioner ? t("air_conditioner") : t("no_ac")}
                  </span>
                </div>
              </div>

              <div className="vehicle-actions">
                <button
                  className="btn-primary"
                  onClick={() => handleAddToCart(car)}
                >
                  {t("add_to_cart")}
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => navigate(`/car/${car.id}`)}
                >
                  {t("view_details")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="brands">
        <a
          href="https://www.toyota-global.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/svg/toyota.svg" alt="Toyota" />
        </a>
        <a
          href="https://www.ford.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/svg/ford.svg" alt="Ford" />
        </a>
        <a
          href="https://www.mercedes-benz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/svg/mers.svg" alt="Mercedes" />
        </a>
        <a
          href="https://www.landrover.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://papik.pro/grafic/uploads/posts/2023-04/1681577958_papik-pro-p-logotip-lend-rover-vektor-13.png"
            alt="Land Rover"
          />
        </a>
        <a
          href="https://www.bmw.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/svg/bmw.svg" alt="BMW" />
        </a>
        <a
          href="https://www.kia.com/us/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://nklk.ru/dll_image/7611.png" alt="Kia" />
        </a>
      </div>
    </div>
  );
}

export default Vehicles;
