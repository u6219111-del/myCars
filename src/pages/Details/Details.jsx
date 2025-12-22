import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../api/supabaseClient";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    async function fetchCar() {
      setLoading(true);

      let query = supabase.from("Cat").select("*").limit(1).single();
      if (id) query = supabase.from("Cat").select("*").eq("id", id).single();

      const { data, error } = await query;
      if (!error && data) setCar(data);

      setLoading(false);
    }

    async function fetchCars() {
      const { data, error } = await supabase.from("Cat").select("*").limit(4);
      if (!error) setCars(data);
    }

    fetchCar();
    fetchCars();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!car) return <div className="loading">Car not found</div>;

  return (
    <div className="details-container">
      <div className="details-main">
        <div className="details-image">
          <img src={car.image_url} alt={car.name} />
          <button
            onClick={() => isFavorite(car.id) ? alert(`${car.name} is already in favorites!`) : addToFavorites(car)}
            className={`favorite-btn ${isFavorite(car.id) ? 'active' : ''}`}
          >
            ♥
          </button>
        </div>
        <div className="details-info">
          <h1>{car.name}</h1>
          <div className="details-meta">
            <span>{car.category}</span>
            <span>{car.year} year {car.color}</span>
          </div>
          <div className="details-desc">
            <h3>Description</h3>
            <p>{car.description}</p>
          </div>
          <div className="details-price">
            <span>${car.price}</span>
            <span>per day</span>
          </div>
          <div className="details-specs">
            <div>
              <img src="/src/assets/svg/korobka.svg" alt="Transmission" />
              <p>Transmission</p>
              <span>{car.automat ? "Automatic" : "Manual"}</span>
            </div>
            <div>
              <img src="/src/assets/svg/gaz.svg" alt="Engine" />
              <p>Engine</p>
              <span>{car.engine_volume}</span>
            </div>
            <div>
              <img src="/src/assets/svg/snow.svg" alt="Air Conditioner" />
              <p>Air Conditioner</p>
              <span>{car.air_conditioner ? "Yes" : "No"}</span>
            </div>
          </div>
          <div className="details-actions">
            <button onClick={() => { addToCart(car);  }}>Add to Cart</button>
            <button onClick={() => isFavorite(car.id) ? alert(`${car.name} is already in favorites!`) : addToFavorites(car)}
              className={isFavorite(car.id) ? 'active' : ''}
            >
              {isFavorite(car.id) ? 'In Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>

      <div className="other-cars-section">
        <div className="other-cars-header">
          <h2>Other Cars</h2>
          <Link to="/vehicles">View All →</Link>
        </div>
        <div className="other-cars-grid">
          {cars.map((c, idx) => (
            <div key={c.id} className="other-car-card" style={{ animationDelay: `${0.2 * idx}s` }}>
              <div className="card-image">
                <img src={c.image_url} alt={c.name} />
                <button onClick={() => isFavorite(c.id) ? alert(`${c.name} is already in favorites!`) : addToFavorites(c)}
                  className={`favorite-btn ${isFavorite(c.id) ? 'active' : ''}`}>♥</button>
              </div>
              <div className="card-info">
                <h3>{c.name}</h3>
                <span>{c.category}</span>
                <span>${c.price}</span>
                <div className="card-specs">
                  <span>{c.automat ? "Automatic" : "Manual"}</span>
                  <span>{c.engine_volume}</span>
                  <span>{c.air_conditioner ? "AC" : "No AC"}</span>
                </div>
                <div className="card-actions">
                  <button onClick={() => { addToCart(c); alert(`${c.name} added to cart!`); }}>Add to Cart</button>
                  <button onClick={() => navigate(`/car/${c.id}`)}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
