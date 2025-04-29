export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
};

export const fetchCSRFToken = async () => {
  try {
    // Fetch CSRF token dari Sanctum
    const response = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
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

export const http = async (url, options = {}) => {
  let token = getCookie("XSRF-TOKEN");

  if (!token) {
    await fetchCSRFToken();
    token = getCookie("XSRF-TOKEN");
  }

  // Kalau body adalah FormData, jangan set Content-Type manual
  const isFormData = options.body instanceof FormData;

  const defaultHeaders = {
    ...(isFormData
      ? {} // Tidak set Content-Type
      : { "Content-Type": "application/json" }),
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

  return fetch(url, finalOptions);
};

export default http;
