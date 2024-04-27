import axios from "axios";

export const registerPubli = async (formData) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/posts/", formData);
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

export const registerFile = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/upload/",
      formData
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
