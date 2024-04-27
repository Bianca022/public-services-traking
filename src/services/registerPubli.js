import axios from "axios";

export const registerPubli = async (publiFormData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/posts/",
      publiFormData
    );
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Erro", error);
    return {
      success: false,
      message: "Erro ao fazer login. Por favor, tente novamente.",
    };
  }
};

export const registerFile = async (fileData, postId) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/upload/",
      fileData,
      {
        params: {
          post_id: postId,
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
      message: "Erro ao fazer upload de arquivo. Por favor, tente novamente.",
    };
  }
};
