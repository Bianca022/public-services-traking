import axios from "axios";

export const editPubli = async (formdata) => {
  try {
    const id = localStorage.getItem("editPostId");
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

export const editPubliId = async () => {
  try {
    const id = localStorage.getItem("editPostId");
    const token = localStorage.getItem("accessToken");

    const response = await axios.get(`http://127.0.0.1:8000/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
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
