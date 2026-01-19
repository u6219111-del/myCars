import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchUsers, deleteUser } from "../../api/mockUsers";
import { supabase } from "../../api/supabaseClient";
import "./AdminPanel.css";
import "./AdminEnhancements.css";

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
    available: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchCars(),
          fetchReviews(),
          fetchEmployees(),
          fetchRegisteredUsers(),
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
        available: true,
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
        available: true,
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
    try {
      const response = await fetch("/api/reviews");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setReviews(data || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews([]);
    }
  };

  const handleApproveReview = async (id) => {
    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approved: true }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await fetchReviews();
      alert(t("review_approved_success", "Отзыв одобрен!"));
    } catch (error) {
      console.error("Error approving review:", error);
      alert("Ошибка при одобрении отзыва");
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await fetchReviews();
      alert(t("review_deleted_success", "Отзыв удален!"));
    } catch (error) {
      console.error("Error deleting review:", error);
      alert("Ошибка при удалении отзыва");
    }
  };

  const fetchEmployees = async () => {
    try {
      console.log("Fetching employees from Supabase...");
      
      // First let's discover what columns exist
      const { data: sampleData, error: discoveryError } = await supabase
        .from("employees")
        .select("*")
        .limit(1);
      
      console.log("Column discovery:", { sampleData, discoveryError });
      
      // Use the correct column structure for your table
      const columnQuery = "id, full_name, email, position, phone, avatar_url, description, is_active, created_at";
      
      let data = null;
      let finalError = null;
      
      // Make single request with correct columns
      try {
        const result = await supabase.from("employees").select(columnQuery);
        console.log("Employee query result:", result);
        
        if (!result.error) {
          data = result.data;
          finalError = null;
        } else {
          finalError = result.error;
        }
      } catch (e) {
        console.log("Failed employee query:", e);
        finalError = e;
      }
      
      if (finalError || !data) {
        console.error("❌ Final Supabase error:", finalError);
        console.error("Error details:", finalError?.message, finalError?.details, finalError?.hint);
        
        // Show what columns we found
        if (sampleData && sampleData.length > 0) {
          console.log("Available columns in your table:", Object.keys(sampleData[0]));
        }
        
        // Fallback to local data if Supabase fails
        const localData = [
          {
            id: "1",
            name: "Michael Johnson",
            email: "michael@company.com",
            position: "Manager",
            created_at: "2025-12-28T10:55:48.838Z"
          },
          {
            id: "2",
            name: "Sarah Williams",
            email: "sarah@company.com",
            position: "Sales Representative",
            created_at: "2025-12-28T10:56:00.000Z"
          }
        ];
        
        console.log("⚠️ Using fallback data");
        setEmployees(localData);
      } else {
        console.log("✅ Successfully fetched employees:", data);
        
        // Normalize data structure to match component expectations
        const normalizedData = data.map(emp => ({
          id: emp.id,
          name: emp.full_name || "Unnamed Employee",
          email: emp.email,
          position: emp.position || "Employee",
          phone: emp.phone || "",
          avatar_url: emp.avatar_url || "",
          description: emp.description || "",
          is_active: emp.is_active !== undefined ? emp.is_active : true,
          created_at: emp.created_at
        }));
        
        console.log("Normalized data:", normalizedData);
        setEmployees(normalizedData);
      }
    } catch (error) {
      console.error("💥 Exception in fetchEmployees:", error);
      console.error("Error stack:", error.stack);
      setEmployees([]);
    }
  };

  const handleDeleteEmployee = async (id) => {
    await supabase.from("employees").delete().eq("id", id);
    fetchEmployees();
  };
  const fetchRegisteredUsers = async () => {
    try {
      const usersData = await fetchUsers();

      // For each user, get their profile to get the proper username
      const usersWithProfiles = [];
      for (const user of usersData) {
        try {
          const profileRes = await fetch(
            `/api/profiles?id=${encodeURIComponent(user.id)}`
          );
          const profileData = await profileRes.json();
          const profile = profileData[0];

          usersWithProfiles.push({
            id: user.id,
            username: profile?.username || user.email,
            avatar_url: profile?.avatar_url || "",
            created_at: user.created_at || user.created_at,
            email: user.email,
          });
        } catch (profileError) {
          // If profile doesn't exist, use user data
          usersWithProfiles.push({
            id: user.id,
            username: user.email,
            avatar_url: "",
            created_at: user.created_at || new Date().toISOString(),
            email: user.email,
          });
        }
      }

      setUsers(usersWithProfiles || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      fetchRegisteredUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  /* ===================== RENDER ===================== */

  const renderDashboard = () => {
    // Calculate review statistics
    const approvedReviews = reviews.filter(
      (review) => review.approved === true
    ).length;
    const pendingReviews = reviews.filter(
      (review) => review.approved !== true
    ).length;

    return (
      <>
        <h2 className="admin-section-title">Dashboard</h2>

        {/* Main Statistics */}
        <div className="admin-stats">
          <div className="admin-stat-card">
            <h4>{t("total_cars")}</h4>
            <p>{cars.length}</p>
          </div>
          <div className="admin-stat-card">
            <h4>{t("total_users")}</h4>
            <p>{users.length}</p>
          </div>
          <div className="admin-stat-card">
            <h4>{t("total_employees")}</h4>
            <p>{employees.length}</p>
          </div>
        </div>

        {/* Review Statistics Section */}
        <div className="admin-reviews-dashboard">
          <h3>{t("review_statistics")}</h3>
          <div className="review-stats-grid">
            <div className="review-stat-card total-reviews">
              <div className="stat-icon">📝</div>
              <div className="stat-info">
                <h4>{t("total_reviews_count")}</h4>
                <p className="stat-number">{reviews.length}</p>
              </div>
            </div>

            <div className="review-stat-card approved-reviews">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <h4>{t("approved_reviews")}</h4>
                <p className="stat-number">{approvedReviews}</p>
                <p className="stat-percentage">
                  {reviews.length > 0
                    ? Math.round((approvedReviews / reviews.length) * 100)
                    : 0}
                  %
                </p>
              </div>
            </div>

            <div className="review-stat-card pending-reviews">
              <div className="stat-icon">⏳</div>
              <div className="stat-info">
                <h4>{t("pending_reviews")}</h4>
                <p className="stat-number">{pendingReviews}</p>
                <p className="stat-percentage">
                  {reviews.length > 0
                    ? Math.round((pendingReviews / reviews.length) * 100)
                    : 0}
                  %
                </p>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <button
              className="btn-secondary"
              onClick={() => setActiveTab("reviews")}
            >
              {t("reviews_management")}
            </button>
          </div>
        </div>
      </>
    );
  };

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
            onChange={(e) => setNewCar({ ...newCar, category: e.target.value })}
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

  const renderReviews = () => {
    // Sort reviews: pending first, then approved
    const sortedReviews = [...reviews].sort((a, b) => {
      if (a.approved === b.approved) return 0;
      return a.approved ? 1 : -1;
    });

    const approvedCount = reviews.filter((r) => r.approved).length;
    const pendingCount = reviews.filter((r) => !r.approved).length;

    return (
      <>
        <h2 className="admin-section-title">{t("reviews_management")}</h2>

        {/* Review Summary */}
        <div className="review-summary">
          <div className="summary-item">
            <span className="summary-label">{t("total_reviews_count")}:</span>
            <span className="summary-value">{reviews.length}</span>
          </div>
          <div className="summary-item approved">
            <span className="summary-label">{t("approved_reviews")}:</span>
            <span className="summary-value">{approvedCount}</span>
          </div>
          <div className="summary-item pending">
            <span className="summary-label">{t("pending_reviews")}:</span>
            <span className="summary-value">{pendingCount}</span>
          </div>
        </div>

        {/* Reviews Table */}
        <div className="admin-reviews-table-container">
          {sortedReviews.length > 0 ? (
            <table className="admin-reviews-table">
              <thead>
                <tr>
                  <th>{t("user")}</th>
                  <th>{t("comment")}</th>
                  <th>{t("review_date")}</th>
                  <th>{t("review_status")}</th>
                  <th>{t("review_actions")}</th>
                </tr>
              </thead>
              <tbody>
                {sortedReviews.map((review) => (
                  <tr
                    key={review.id}
                    className={review.approved ? "approved" : "pending"}
                  >
                    <td>
                      <>
                        <div className="user-info">
                          <strong>{review.user_name || "Anonymous"}</strong>
                          {review.user_email && (
                            <>
                              <br />
                              <small>{review.user_email}</small>
                            </>
                          )}
                        </div>
                      </>
                    </td>
                    <td>
                      <div className="review-comment">{review.comment}</div>
                    </td>
                    <td>
                      {review.created_at
                        ? new Date(review.created_at).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td>
                      <span
                        className={`status-badge ${
                          review.approved ? "approved" : "pending"
                        }`}
                      >
                        {review.approved
                          ? t("review_status_approved")
                          : t("review_status_pending")}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        {!review.approved && (
                          <button
                            className="btn-approve"
                            onClick={() => handleApproveReview(review.id)}
                            title={t("approve_review")}
                          >
                            ✅
                          </button>
                        )}
                        <button
                          className="btn-delete"
                          onClick={() => handleDeleteReview(review.id)}
                          title={t("delete")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-reviews-message">
              <p>{t("no_reviews_found")}</p>
            </div>
          )}
        </div>
      </>
    );
  };

  const renderEmployees = () => (
    <>
      <h2 className="admin-section-title">Employees</h2>
      <div className="admin-employees-list">
        {employees.map((e) => (
          <div key={e.id} className="admin-employee-item">
            <div className="admin-employee-info">
              <h5>{e.name}</h5>
              <p>{e.email}</p>
              {e.position && <p><strong>Position:</strong> {e.position}</p>}
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
              <h5>{user.username || "No name"}</h5>
              <p>ID: {user.id}</p>
              <p>
                Registered: {new Date(user.created_at).toLocaleDateString()}
              </p>
              {user.avatar_url && (
                <img src={user.avatar_url} alt={user.username} width={50} />
              )}
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
