import { getCarss } from "../api/allCars";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vehicles.css";

function Vehicles() {
  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState("All Vehicles");
  const navigate = useNavigate(); 

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

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mu">
        Select a vehicle group
      </h1>

      <div className="u flex items-center justify-center gap-[24px]">
        <button onClick={() => setFilter("All Vehicles")}>All Vehicles</button>
        <button onClick={() => setFilter("Miniven")}>Miniven</button>
        <button onClick={() => setFilter("Sport")}>Sport</button>
        <button onClick={() => setFilter("SUV")}>SUV</button>
        <button onClick={() => setFilter("Sedan")}>Sedan</button>
        <button onClick={() => setFilter("Cabriolet")}>Cabriolet</button>
      </div>

      <div className="e flex items-center justify-center flex-wrap gap-[35px] mt-8">
        {filteredCars.map((car) => (
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
                  <h2 className="w-[250px] text-[22px] font-[600]">
                    {car.name}
                  </h2>
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
                  <img src="/src/assets/svg/gaz.svg" alt="" /> PB 95
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

      <div className="br flex justify-center items-center h-[174px] gap-15 p-5 bg-gray-100 flex-wrap">
        <a
          href="https://www.toyota-global.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/svg/toyota.svg"
            alt="Toyota"
            className="w-24 h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </a>
        <a href="https://www.ford.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/src/assets/svg/ford.svg"
            alt="Ford"
            className="w-24 h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </a>
        <a
          href="https://www.mercedes-benz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/svg/mers.svg"
            alt="Mercedes"
            className="w-24 h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </a>
        <a
          href="https://www.landrover.com/market-selector/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://papik.pro/grafic/uploads/posts/2023-04/1681577958_papik-pro-p-logotip-lend-rover-vektor-13.png"
            alt="Land Rover"
            className="w-24 h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </a>
        <a href="https://www.bmw.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/src/assets/svg/bmw.svg"
            alt="BMW"
            className="w-24 h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </a>
        <a href="https://www.kia.com/us/en" target="_blank" rel="noopener noreferrer">
          <img
            src="https://nklk.ru/dll_image/7611.png"
            alt="Audi"
            className="w-24 h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
}

export default Vehicles;
