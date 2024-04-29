import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { registerPubli } from "../../services/registerPubli";

function RegisterPubli() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleRegisterClick = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (file) {
        formData.append("file", file);
      }

      const publiResponse = await registerPubli(formData);
      console.log(publiResponse);

      if (publiResponse.success) {
        setSuccessMessage("Publicação realizada com sucesso!");
        setTimeout(() => {
          navigate("/home");
        }, 2000);
        // Limpar os campos após o sucesso
        setTitle("");
        setContent("");
        setFile(null);
      } else {
        setErrorMessage(publiResponse.message);
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      setErrorMessage("Erro ao fazer cadastro. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="body">
        <div className="container">
          <form>
            <h1>
              Relate um problema através de <br /> um post
            </h1>
            <div className="flex-colum">
              <label htmlFor="">Adicionar imagem: </label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <div className="flex-colum">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex-colum">
              <label htmlFor="content">Conteúdo:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                cols={30}
                rows={5}
              ></textarea>
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
            <button
              type="button"
              onClick={handleRegisterClick}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Publicar"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPubli;
