import axios from "axios";

export const getPosts = async () => {
  try {
    // Obtém o token do localStorage
    const token = localStorage.getItem("accessToken");

    const response = await axios.get("http://127.0.0.1:8000/posts/", {
      headers: {
        Authorization: `Bearer ${token}`, // Passando o token de acesso no cabeçalho Authorization
      },
    });
    console.log(response);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Erro", error);
    return {
      success: false,
      message: "Erro ao obter os posts. Por favor, tente novamente.",
    };
  }
};
