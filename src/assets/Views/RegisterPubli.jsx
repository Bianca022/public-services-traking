import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate do React Router
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { registerPubli, registerFile } from "../../services/registerPubli";

function RegisterPubli({ postId }) {
  // Recebendo postId como uma propriedade
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // Estado para controlar a mensagem de sucesso
  const navigate = useNavigate(); // Obtendo a função de navegação do React Router

  const handleRegisterClick = async () => {
    try {
      setLoading(true);

      // Primeiro, fazemos o upload do arquivo
      console.log("Arquivo selecionado:", file);
      console.log("ID da publicação:", postId);
      const fileData = new FormData();
      fileData.append("file", file);
      const fileResponse = await registerFile(fileData, postId);
      console.log(fileResponse);

      if (!fileResponse.success) {
        setErrorMessage(fileResponse.message);
        setLoading(false);
        return;
      }

      console.log("Resposta do upload de arquivo:", fileResponse); // Console para verificar a resposta do upload

      // Se o upload do arquivo for bem-sucedido, procedemos com o cadastro da publicação
      const publiFormData = {
        title: title,
        description: description,
        file: fileResponse.data.url, // Usamos a URL do arquivo retornado pela resposta do upload
      };
      console.log("Dados da publicação:", publiFormData); // Console para verificar os dados da publicação
      const publiResponse = await registerPubli(publiFormData);

      if (publiResponse.success) {
        console.log("Cadastro bem-sucedido:", publiResponse.data);
        setSuccessMessage("Publicação realizada com sucesso!"); // Definindo a mensagem de sucesso
        // navigate("/home"); // Redirecionando para "/home" após o cadastro bem-sucedido
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
              <label htmlFor="description">Descrição:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols={30}
                rows={5}
              ></textarea>
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}{" "}
            {/* Exibindo a mensagem de sucesso */}
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
