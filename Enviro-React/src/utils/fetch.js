export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
};

const API_URL = import.meta.env.VITE_API_URL;

export const fetchCSRFToken = async () => {
  try {
    // Fetch CSRF token dari Sanctum
    const response = await fetch(`${API_URL}/sanctum/csrf-cookie`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch CSRF token");
    }
    return getCookie("XSRF-TOKEN");
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
    return null;
  }
};

export const http = async (url, options = {}) => {
  let token = getCookie("XSRF-TOKEN");

  if (!token) {
    token = await fetchCSRFToken();
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

  // Prefix otomatis URL hanya jika relative ("/api/xxx")
  const fullUrl = url.startsWith("http") ? url : `${API_URL}${url}`;

  try {
    const response = await fetch(fullUrl, finalOptions);

    // Jika token expired atau invalid, coba refresh dan request ulang
    if (response.status === 419) {
      const newToken = await fetchCSRFToken();
      if (newToken) {
        finalOptions.headers["X-XSRF-TOKEN"] = newToken;
        return fetch(fullUrl, finalOptions);
      }
    }

    return response;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};

export default http;
