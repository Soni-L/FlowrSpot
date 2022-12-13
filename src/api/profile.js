const API = "https://flowrspot-api.herokuapp.com/api/v1";

export const myProfile = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const token = localStorage.getItem("token");
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(`${API}/users/me`, {
      method: "GET",
      headers: headers,
    });
    await response.json();
    if (response.status == 401) {
      localStorage.removeItem("token");
    }
  } catch (err) {
    console.log(err);
  }
};
