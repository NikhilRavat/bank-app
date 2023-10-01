import axios from "axios";

//const baseUrl = "http://localhost:5220/api/";
const baseUrl = "https://localhost:44350/api/";

const getApiConfig = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const config = {
    headers: { Authorization: `Bearer ${user ? user.token : ''}` }
  };
  return config;
}

const apiService = async (url, httpVerb, action) => {

  switch (httpVerb) {
    case "get":
      try {
        const response = await axios.get(baseUrl + url, getApiConfig());
        console.log(response);
        return {
          type: action.type,
          payload: response.data.data,
        };
      } catch (error) {
        return {
          type: action.type,
          error: error.response.data.message ?? error.message,
        };
      }
    case "post":
      try {
        const response = await axios.post(baseUrl + url, getApiConfig(), action.data);
        console.log(response);
        return {
          type: action.type,
          payload: response.data.data,
        };
      } catch (error) {
        return { type: action.type, error: error.message };
      }
    default:
      return "";
  }
};

export default apiService;
