import axios from "axios";

export const login = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/token/",
      formData
    );

    // Guarda o token no localStorage
    localStorage.setItem("accessToken", response.data.access);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return {
      success: false,
      message: "Erro ao fazer login. Por favor, tente novamente.",
    };
  }
};
