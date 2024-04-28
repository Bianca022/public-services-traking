import axios from "axios";

export const editPubli = async (formdata) => {
  try {
    const id = localStorage.getItem("editPostId"); // Recuperar o ID da publicação do localStorage
    const token = localStorage.getItem("accessToken");

    const response = await axios.put(
      `http://127.0.0.1:8000/posts/${id}/`,
      formdata,
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
      message: "Erro ao editar a publicação. Por favor, tente novamente.",
    };
  }
};
