const DB_URL = "/api";

export const fetchReviews = async () => {
  try {
    const res = await fetch(`${DB_URL}/reviews`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const responseText = await res.text();
    return responseText ? JSON.parse(responseText) : [];
  } catch (error) {
    console.error('Fetch reviews error:', error);
    throw error;
  }
};

export const addReview = async (reviewData) => {
  try {
    const res = await fetch(`${DB_URL}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to add review: ${res.status} - ${errorText}`);
    }
    
    const responseText = await res.text();
    return responseText ? JSON.parse(responseText) : null;
  } catch (error) {
    console.error('Add review error:', error);
    throw error;
  }
};