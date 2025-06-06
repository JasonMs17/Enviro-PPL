export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
};

export const fetchCSRFToken = async () => {
  try {
    const API_URL = import.meta.env.VITE_API_URL;
    // Fetch CSRF token dari Sanctum
    const response = await fetch(`${API_URL}/sanctum/csrf-cookie`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch CSRF token");
    }
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
  }
};

const API_URL = import.meta.env.VITE_API_URL;

export const http = async (url, options = {}) => {
  let token = getCookie("XSRF-TOKEN");

  if (!token) {
    await fetchCSRFToken();
    token = getCookie("XSRF-TOKEN");
  }

  const isFormData = options.body instanceof FormData;

  const defaultHeaders = {
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    "X-XSRF-TOKEN": token,
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    ...(options.headers || {}),
  };

  const finalOptions = {
    ...options,
    credentials: "include",
    headers: defaultHeaders,
  };

  // ⬅️ Prefix otomatis URL hanya jika relative ("/api/xxx")
  const fullUrl = url.startsWith("http") ? url : API_URL + url;

  return fetch(fullUrl, finalOptions);
};

export default http;
