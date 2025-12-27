import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../api/supabaseClient";
import "./AdminPanel.css";

function AdminPanel() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [cars, setCars] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newCar, setNewCar] = useState({
    name: "",
    category: "Sedan",
    price: "",
    image: "",
    automat: true,
    airConditioner: true,
    available: true
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchCars(),
          fetchReviews(),
          fetchEmployees(),
          fetchUsers()
        ]);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  

  const fetchCars = async () => {
    const { data, error } = await supabase
      .from("Cat")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setCars(data || []);
  };

  const handleAddCar = async (e) => {
    e.preventDefault();

    try {
      const car = {
        name: newCar.name,
        category: newCar.category,
        price: parseFloat(newCar.price),
        image_url: newCar.image,
        automat: newCar.automat,
        air_conditioner: newCar.airConditioner,
        available: true
      };

      const { error } = await supabase.from("Cat").insert([car]);
      if (error) throw error;

      await fetchCars();

      setNewCar({
        name: "",
        category: "Sedan",
        price: "",
        image: "",
        automat: true,
        airConditioner: true,
        available: true
      });
    } catch (error) {
      console.error("Error adding car:", error);
      alert(error.message);
    }
  };

  const handleDeleteCar = async (id) => {
    const { error } = await supabase.from("Cat").delete().eq("id", id);
    if (!error) fetchCars();
  };



  const fetchReviews = async () => {
    const { data, error } = await supabase.from("reviews").select("*");
    if (!error) setReviews(data || []);
  };

  const handleApproveReview = async (id) => {
    await supabase.from("reviews").update({ approved: true }).eq("id", id);
    fetchReviews();
  };

  const handleDeleteReview = async (id) => {
    await supabase.from("reviews").delete().eq("id", id);
    fetchReviews();
  };



  const fetchEmployees = async () => {
    const { data, error } = await supabase.from("employees").select("*");
    if (!error) setEmployees(data || []);
  };

  const handleDeleteEmployee = async (id) => {
    await supabase.from("employees").delete().eq("id", id);
    fetchEmployees();
  };


  const fetchUsers = async () => {
    const { data:Profiles , error } = await supabase
      .from("Profiles")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setUsers(Profiles || []);
  };

  const handleDeleteUser = async (id) => {
    const { error } = await supabase.from("Profiles").delete().eq("id", id);
    if (!error) fetchUsers();
  };

  /* ===================== RENDER ===================== */

  const renderDashboard = () => (
    <>
      <h2 className="admin-section-title">Dashboard</h2>
      <div className="admin-stats">
        <div className="admin-stat-card">
          <h4>{t("total_cars")}</h4>
          <p>{cars.length}</p>
        </div>
        <div className="admin-stat-card">
          <h4>{t("total_reviews")}</h4>
          <p>{reviews.length}</p>
        </div>
        <div className="admin-stat-card">
          <h4>{t("total_employees")}</h4>
          <p>{employees.length}</p>
        </div>
        <div className="admin-stat-card">
          <h4>{t("total_users")}</h4>
          <p>{users.length}</p>
        </div>
      </div>
    </>
  );

  const renderCars = () => (
    <>
      <h2 className="admin-section-title">{t("manage_cars")}</h2>
      <div className="admin-add-form">
        <h4>{t("add_car")}</h4>
        <form onSubmit={handleAddCar}>
          <input
            placeholder="Name"
            value={newCar.name}
            onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
            required
          />
          <select
            value={newCar.category}
            onChange={(e) =>
              setNewCar({ ...newCar, category: e.target.value })
            }
          >
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Sport">Sport</option>
            <option value="Miniven">Miniven</option>
            <option value="Cabriolet">Cabriolet</option>
          </select>
          <input
            type="number"
            placeholder="Price"
            value={newCar.price}
            onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
            required
          />
          <input
            placeholder="Image URL"
            value={newCar.image}
            onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
          />
          <label>
            <input
              type="checkbox"
              checked={newCar.automat}
              onChange={(e) =>
                setNewCar({ ...newCar, automat: e.target.checked })
              }
            />
            Automatic
          </label>
          <label>
            <input
              type="checkbox"
              checked={newCar.airConditioner}
              onChange={(e) =>
                setNewCar({ ...newCar, airConditioner: e.target.checked })
              }
            />
            Air conditioner
          </label>
          <button type="submit">{t("add_car")}</button>
        </form>
      </div>
      <div className="admin-cars-list">
        {cars.map((car) => (
          <div key={car.id} className="admin-car-item">
            <img src={car.image_url} alt={car.name} />
            <div className="admin-car-info">
              <h5>{car.name}</h5>
              <p>{car.category}</p>
              <p>${car.price}</p>
            </div>
            <button
              className="admin-delete-btn"
              onClick={() => handleDeleteCar(car.id)}
            >
              {t("delete")}
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const renderReviews = () => (
    <>
      <h2 className="admin-section-title">Reviews</h2>
      <div className="admin-reviews-list">
        {reviews.map((r) => (
          <div key={r.id} className="admin-review-item">
            <div className="admin-review-info">
              <h5>{r.user_name || "User"}</h5>
              <p>{r.comment}</p>
            </div>
            {!r.approved && (
              <button
                className="admin-approve-btn"
                onClick={() => handleApproveReview(r.id)}
              >
                {t("approve")}
              </button>
            )}
            <button
              className="admin-delete-btn"
              onClick={() => handleDeleteReview(r.id)}
            >
              {t("delete")}
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const renderEmployees = () => (
    <>
      <h2 className="admin-section-title">Employees</h2>
      <div className="admin-employees-list">
        {employees.map((e) => (
          <div key={e.id} className="admin-employee-item">
            <div className="admin-employee-info">
              <h5>{e.name}</h5>
              <p>{e.email}</p>
            </div>
            <button
              className="admin-delete-btn"
              onClick={() => handleDeleteEmployee(e.id)}
            >
              {t("delete")}
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const renderUsers = () => (
    <>
      <h2 className="admin-section-title">Users</h2>
      <div className="admin-users-list">
        {users.map((user) => (
          <div key={user.id} className="admin-user-item">
            <div className="admin-user-info">
              <h5>{user.full_name || "No name"}</h5>
              <p>{user.email}</p>
              <p>Role: {user.role}</p>
              <p>Registered: {new Date(user.created_at).toLocaleDateString()}</p>
            </div>
            <button
              className="admin-delete-btn"
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="admin-panel-container">
      <div className="admin-panel-wrapper">
        <aside className="admin-sidebar">
          <div className="admin-logo">Admin Panel</div>
          <nav className="admin-nav">
            <button
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={activeTab === "cars" ? "active" : ""}
              onClick={() => setActiveTab("cars")}
            >
              Cars
            </button>
            <button
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={activeTab === "employees" ? "active" : ""}
              onClick={() => setActiveTab("employees")}
            >
              Employees
            </button>
            <button
              className={activeTab === "users" ? "active" : ""}
              onClick={() => setActiveTab("users")}
            >
              Users
            </button>
          </nav>
        </aside>

        <main className="admin-content">
          {activeTab === "dashboard" && renderDashboard()}
          {activeTab === "cars" && renderCars()}
          {activeTab === "reviews" && renderReviews()}
          {activeTab === "employees" && renderEmployees()}
          {activeTab === "users" && renderUsers()}
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
