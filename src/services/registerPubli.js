import axios from "axios";

export const registerPubli = async (publiFormData) => {
  try {
    // Obtém o token do localStorage
    const token = localStorage.getItem("accessToken");

    const response = await axios.post(
      "http://127.0.0.1:8000/posts/",
      publiFormData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Passando o token de acesso no cabeçalho Authorization
        },
      }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Erro", error);
    return {
      success: false,
      message: "Erro ao registrar publicação. Por favor, tente novamente.",
    };
  }
};
