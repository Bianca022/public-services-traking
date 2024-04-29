import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { editPubli, editPubliId } from "../../services/editPubli";
import { useNavigate, useParams } from "react-router-dom";

function EditPubli() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await editPubliId(id);
        setFormData({
          title: response.data.title,
          content: response.data.content,
          image: response.data.image,
        });
      } catch (error) {
        console.error("Erro ao buscar publicação:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    if (imageFile) {
      formDataToSend.append("file", imageFile);
    }

    try {
      const response = await editPubli(formDataToSend);
      console.log("Resposta da Edição:", response);
      setSuccessMessage("Publicação editada com sucesso.");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.error("Erro", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="body">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Editar publicação</h1>
            <div className="flex-colum">
              <label htmlFor="image">Adicionar imagem: </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
              />
              {formData.image && (
                <a
                  href={formData.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visualizar imagem
                </a>
              )}
            </div>
            <div className="flex-colum">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex-colum">
              <label htmlFor="content">Conteúdo:</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                cols={30}
                rows={5}
              ></textarea>
            </div>
            {successMessage && (
              <div style={{ color: "green" }}>{successMessage}</div>
            )}
            <button type="submit">Editar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditPubli;
