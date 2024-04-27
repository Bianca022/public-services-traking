import axios from "axios";

export const register = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/users/create_user/",
      formData
    );
    return {
      success: true,
      data: response.data, // Return response data for successful login
    };
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return {
      success: false,
      message: "Erro ao fazer login. Por favor, tente novamente.",
    };
  }
};
