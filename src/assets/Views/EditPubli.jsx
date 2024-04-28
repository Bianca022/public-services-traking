import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { editPubli } from "../../services/editPubli";

function EditPubli() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editPubli(formData); // Não envie mais o ID aqui
      console.log("Resposta da Edição:", response);
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
              <input type="file" id="image" name="image" />
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
            <button type="submit">Editar</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditPubli;
