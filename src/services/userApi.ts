import api from "./api";

// export const getUserByUsername = async (username: string) => {
//   try {
//     const response = await api.get(`/user/${username}`);
//     return response.data;
//     } catch (error) {
//     console.error("Error fetching user by username:", error);
//     throw error;
//   } 
// };
export const userApi = {
  getUserByUsername: async (username: string) => {
    try { 
      const response = await api.get(`/user/${username}`);
      return response.data;
      } catch (error) {
      console.error("Error fetching user by username:", error);
      throw error;
    } 
  }
}