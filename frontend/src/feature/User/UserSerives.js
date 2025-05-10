import axios from "axios";

const base_url = "http://localhost:5441/api/users";

export const Userserives = async (userData) => {
  const response = await axios.post(`${base_url}/user-data`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
