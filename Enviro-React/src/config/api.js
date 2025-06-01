const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000"
    : "https://enviro-backend.onrender.com";

export default API_URL;
