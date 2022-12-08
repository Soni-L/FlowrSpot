const API = "https://flowrspot-api.herokuapp.com/api/v1";

export const signup = async ({
  email,
  password,
  first_name,
  last_name,
  date_of_birth,
}) => {
  try {
    const response = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        first_name,
        last_name,
        date_of_birth,
      }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
    return err;
  }
};
