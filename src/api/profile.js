const API = "https://flowrspot-api.herokuapp.com/api/v1";

const authenticatedRequest = async (url, method, body) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    const { fetch: originalFetch } = window;
    window.fetch = async (...args) => {
      let [resource, config] = args;
      // request interceptor here
      const response = await originalFetch(resource, config);
      // response interceptor here
      if (response.status === 401 && token) {
        // refresh token
        const refreshResponse = await fetch(`${API}/users/me/refresh`, {
          method: "GET",
        });
        localStorage.setItem("token", refreshResponse.auth_token);
      }
      return response;
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });
    if (response.status == 401) {
      localStorage.removeItem("token");
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const myProfile = async () => {
  return authenticatedRequest(`${API}/users/me`, "GET");
};
