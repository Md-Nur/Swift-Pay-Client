import axios from "axios";

const getCurrentUser = async () => {
  try {
    const { data } = await axios.get("/users/get-user");
    if (data.success) {
      return data.data;
    }
  } catch (e) {
    try {
      const { data } = await axios.get("/users/refresh-token");
      if (data.success) {
        getCurrentUser();
      }
    } catch (error) {
      return null;
    }
  }
};

export default getCurrentUser
