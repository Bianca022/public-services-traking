import axios from "axios";

export const deletePubli = async (postId) => {
  // Alterei o parâmetro para receber apenas o postId
  try {
    const token = localStorage.getItem("accessToken");

    const response = await axios.delete(
      `http://127.0.0.1:8000/posts/${postId}/`, // Use o postId fornecido como parte da URL
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
      message: "Erro ao excluir a publicação. Por favor, tente novamente.",
    };
  }
};
