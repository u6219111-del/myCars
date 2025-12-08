import { useEffect, useState } from "react";
import { getCars } from "../../api/myCars";
import { Link, useNavigate } from "react-router-dom";

function MyCar() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCars() {
      try {
        setLoading(true);
        const data = await getCars();
        setCars(data);
      } catch (err) {
        console.error("Error loading cars:", err);
        setError("Failed to load cars");
      } finally {
        setLoading(false);
      }
    }

    loadCars();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px] text-gray-600 text-xl">
        Loading cars...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[400px] text-red-600 text-xl">
        {error}
      </div>
    );
  }

  if (!cars.length) {
    return (
      <div className="flex justify-center items-center h-[400px] text-gray-500 text-xl">
        No cars found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex justify-between w-[1200px] mx-auto">
        <h1 className="w-[530px] text-[50px] font-bold">
          Choose the car that suits you
        </h1>
        <Link to="/vehicles">
          <h4 className="mi flex items-center cursor-pointer text-gray-600 hover:text-gray-800 transition">
            View All <span className="ml-2 text-[18px]">→</span>
          </h4>
        </Link>
      </div>

      <div className="my flex items-center justify-center flex-wrap gap-[35px] pt-[30px]">
        {cars.map((car) => (
          <div
            key={car.id}
            className="w-[397px] h-[510px] bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex justify-center flex-col"
          >
            <img
              src={car.image_url}
              alt={car.name}
              className="w-full h-[260px] object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-around">
              <div className="flex justify-center gap-[40px]">
                <span>
                  <h2 className="w-[250px] text-[22px] font-[600]">{car.name}</h2>
                  <p className="text-gray-500">{car.category}</p>
                </span>
                <p className="text-[18px] font-[500] pt-[10px]">${car.price}</p>
              </div>

              <div className="flex items-center justify-center gap-[30px] mt-4 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <img src="/src/assets/svg/korobka.svg" alt="" />{" "}
                  {car.automat ? "Automatic" : "Manual"}
                </div>
                <div className="flex items-center gap-1">
                  <img src="/src/assets/svg/gaz.svg" alt="" /> {car.engine_volume}
                </div>
                <div className="flex items-center gap-1">
                  <img src="/src/assets/svg/snow.svg" alt="" />{" "}
                  {car.air_conditioner ? "Air Conditioner" : "No AC"}
                </div>
              </div>

              <button
                onClick={() => navigate(`/car/${car.id}`)}
                className="umcha w-[350px] h-[45px] bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCar;
