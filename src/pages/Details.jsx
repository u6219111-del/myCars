import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../api/supabaseClient";

function Details() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCar() {
      setLoading(true);

      let query = supabase.from("Cat").select("*").limit(1).single();

      if (id) {
        query = supabase.from("Cat").select("*").eq("id", id).single();
      }

      const { data, error } = await query;

      if (error) {
        console.error("Ошибка при получении машины:", error);
      } else if (!data) {
        console.warn("Машина не найдена в Supabase для id:", id);
      } else {
        console.log("Машина найдена:", data);
        setCar(data);
      }

      setLoading(false);
    }

    async function fetchOtherCars() {
      const { data, error } = await supabase.from("Cat").select("*");
      if (error) {
        console.error("Ошибка при получении списка машин:", error);
      } else {
        setCars(data.filter((c) => c.id !== id).slice(0, 6));
      }
    }

    fetchCar();
    fetchOtherCars();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Загрузка...</p>;
  }

  if (!car) {
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">
        Машина не найдена
      </p>
    );
  }

  return (
    <>
      <div className="mt-10 flex justify-center gap-15">
        <div>
          <h1 className="text-[35px] font-bold mb-4">{car.name}</h1>
          <p className="p text-[30px] font-semibold text-[#5937E0] mb-2">
            {car.price}$
          </p>
          <img
            src={car.image_url}
            alt={car.name}
            className="w-[600px] h-[300px] object-cover rounded-2xl mx-auto mb-4"
          />
        </div>

        <div>
          <h2 className="text-[24px] font-semibold tp">
            Technical Specification
          </h2>
          <div className="flex items-center gap-[24px] cr flex-wrap w-[636px]">
            <div className="y w-[196px] h-[148px] rounded-[10px]">
              <img
                className="w-[24px] h-[24px]"
                src="/src/assets/svg/gaz.svg"
                alt=""
              />
              <h4 className="text-[16px] font-semibold text-[black]">Fuel</h4>
              <p className="text-[16px] text-[gray] font-normal mb-2">
                {car.engine_volume}
              </p>
            </div>

            <div className="y w-[196px] h-[148px] rounded-[10px]">
              <img
                className="w-[24px] h-[24px]"
                src="/src/assets/svg/korobka.svg"
                alt=""
              />
              <h4 className="text-[16px] font-semibold text-[black]">
                Gear Box
              </h4>
              <p className="text-[16px] text-[gray] font-normal mb-2">
                {car.automat ? "Automat" : "Manual"}
              </p>
            </div>

            <div className="y w-[196px] h-[148px] rounded-[10px]">
              <img
                className="w-[24px] h-[24px]"
                src="/src/assets/svg/seats.svg"
                alt=""
              />
              <h4 className="text-[16px] font-semibold text-[black]">Seats</h4>
              <p className="text-[16px] text-[gray] font-normal mb-2">
                {car.u_user}
              </p>
            </div>

            <div className="y w-[196px] h-[148px] rounded-[10px]">
              <img
                className="w-[24px] h-[24px]"
                src="/src/assets/svg/door.svg"
                alt=""
              />
              <h4 className="text-[16px] font-semibold text-[black]">Doors</h4>
              <p className="text-[16px] text-[gray] font-normal mb-2">
                {car.d_door}
              </p>
            </div>

            <div className="y w-[196px] h-[148px] rounded-[10px]">
              <img
                className="w-[24px] h-[24px]"
                src="/src/assets/svg/hourse.svg"
                alt=""
              />
              <h4 className="text-[16px] font-semibold text-[black]">
                Strength Horse
              </h4>
              <p className="text-[16px] text-[gray] font-normal mb-2">
                {car.strength_s}
              </p>
            </div>

            <div className="y w-[196px] h-[148px] rounded-[10px]">
              <img
                className="w-[24px] h-[24px]"
                src="/src/assets/svg/snow.svg"
                alt=""
              />
              <h4 className="text-[16px] font-semibold text-[black]">
                Air Conditioner
              </h4>
              <p className="text-[16px] text-[gray] font-normal mb-2">
                {car.air_conditioner ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mir">
        <div className="flex justify-between w-[1200px] mx-auto">
          <h1 className="w-[530px] text-[50px] font-bold">Other Cars</h1>
          <Link to="/vehicles">
            <h4 className="mi flex items-center cursor-pointer text-gray-600 hover:text-gray-800 transition">
              View All <span className="ml-2 text-[18px]">→</span>
            </h4>
          </Link>
        </div>

        <div className="my flex items-center justify-center flex-wrap gap-[35px] pt-[30px]">
          {cars.map((c) => (
            <div
              key={c.id}
              className="w-[397px] h-[510px] bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex justify-center flex-col"
            >
              <img
                src={c.image_url}
                alt={c.name}
                className="w-full h-[260px] object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-around">
                <div className="flex justify-center gap-[40px]">
                  <span>
                    <h2 className="w-[250px] text-[22px] font-[600]">
                      {c.name}
                    </h2>
                    <p className="text-gray-500">{c.category}</p>
                  </span>
                  <p className="text-[18px] font-[500] pt-[10px]">${c.price}</p>
                </div>

                <div className="flex items-center justify-center gap-[30px] mt-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <img src="/src/assets/svg/korobka.svg" alt="" />{" "}
                    {c.automat ? "Automatic" : "Manual"}
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/src/assets/svg/gaz.svg" alt="" />{" "}
                    {c.engine_volume}
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/src/assets/svg/snow.svg" alt="" />{" "}
                    {c.air_conditioner ? "Air Conditioner" : "No AC"}
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/car/${c.id}`)}
                  className="umcha w-[350px] h-[45px] bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="br flex justify-center items-center h-[174px] rounded-2xl gap-15 p-5 bg-gray-100 flex-wrap">
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
          <a
            href="https://www.ford.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <a
            href="https://www.bmw.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/svg/bmw.svg"
              alt="BMW"
              className="w-24 h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </a>
          <a
            href="https://www.kia.com/us/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://nklk.ru/dll_image/7611.png"
              alt="Audi"
              className="w-24 h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Details;
